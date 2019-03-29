from mushroom_classifier import MushroomClassifier


def main():
    classifier = MushroomClassifier(pretrained=False) 
    features, label = classifier.get_training_data("mushrooms.csv")
    classifier.train(features, label)
    #saving trained model
    classifier.save_model("mushroom.model")
  

if __name__ == "__main__":
    main()