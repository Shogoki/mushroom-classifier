import tflearn
import os
from dataTransformation import * 

class MushroomClassifier(object):


    def make_model(self):
        input_layer = tflearn.input_data(shape=[None, 126])
        dense_1 = tflearn.fully_connected(input_layer, 64, activation='relu', regularizer='L2', weight_decay=0.0001)
        softmax = tflearn.fully_connected(dense_1, 2, activation='softmax')

        sgd = tflearn.SGD(learning_rate=0.1, lr_decay=0.96, decay_step=1000)
        top_k = tflearn.metrics.Top_k(5)
        net = tflearn.regression(softmax, optimizer=sgd, metric=top_k, loss='categorical_crossentropy')
        return tflearn.DNN(net, tensorboard_verbose=0)
    

    def __init__(self, modelFile="mushroom.model", pretrained=True):
        ##creating model and load trained weights

        self.model = self.make_model()
        if(pretrained):
            self.model.load(modelFile)
           
    def get_training_data(self, trainingFile):
        
        read_file = open(trainingFile, 'r')
        #skipping header
        next(read_file)
        training_features = []
        training_labels = []
        for line in read_file:
              features, lbl = parse_line(line)
              training_features.append(get_binary_features(features))
              training_labels.append(get_binary_label(lbl))

        return training_features, training_labels
        
    def train(self, training_features, training_labels):
        self.model.fit(training_features, training_labels, n_epoch=30, show_metric=True, run_id="dense_model")    

    def save_model(self, model_file):
        self.model.save(model_file)

    def parse_prediction(self,prediction):
        res = []
        for pred in prediction:
            a = int(pred[0] > pred[1])
            b = int(pred[1] > pred[0])
            res.append(get_text_label([a,b]))
        return res


    def predict(self,data):
        #model = make_model()
        #model.load("mushroom.model")
        features, lbl = parse_line(data,with_label=False)
        data = get_binary_features(features)
        prediction = self.model.predict([data])
        return self.parse_prediction(prediction)


