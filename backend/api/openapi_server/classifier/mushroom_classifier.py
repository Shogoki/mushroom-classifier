import tflearn
#import hickle
import os
import openapi_server.classifier.dataTransformation

class MushroomClassifier(object):


    def make_model(self):
        input_layer = tflearn.input_data(shape=[None, 126])
        dense_1 = tflearn.fully_connected(input_layer, 64, activation='relu', regularizer='L2', weight_decay=0.0001)
        softmax = tflearn.fully_connected(dense_1, 2, activation='softmax')

        sgd = tflearn.SGD(learning_rate=0.1, lr_decay=0.96, decay_step=1000)
        top_k = tflearn.metrics.Top_k(5)
        net = tflearn.regression(softmax, optimizer=sgd, metric=top_k, loss='categorical_crossentropy')
        return tflearn.DNN(net, tensorboard_verbose=0)
    

    def __init__(self, modelFile="mushroom.model"):
        ##creating model and load trained weights
        self.model = self.make_model()
        self.model.load(modelFile)
           
    

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

    def Mushroom_2_datastring(mushroom):
        data =""
        return data

def main():
    data = "x,y,g,f,f,f,c,b,p,e,b,k,k,n,p,p,w,o,l,h,v,d"
    classifier = MushroomClassifier("mushroom.model") 
    print(classifier.predict(data))
   
   # model = make_model()
    #model.load("mushroom.model")
    #features, lbl = parse_line(data,with_label=False)
   # print(features)
    #data = get_binary_features(features)
   # data = hickle.load("test_features.hkl")
    #rint(len(data))
    #print(get_binary_label('p'))
    #prediction = model.predict([data])

   # print(prediction[0][0])
    #print(prediction[0][1])
    #print(prase_prediction(prediction))
    #print(int(prediction[0][0]))
    #print(int(prediction[0][1]))


if __name__ == "__main__":
    main()