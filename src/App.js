import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCard: [],
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCard,
      hasTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    const validateCardTrunfo = !hasTrunfo ? true : hasTrunfo;

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: validateCardTrunfo,
      savedCard: [...savedCard, newCard],
    });
  };

  validationFields = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      // cardTrunfo,
    } = this.state;

    const validateCardName = cardName.trim().length > 0;
    const validateCardDescription = cardDescription.trim().length > 0;
    const validateCardImage = cardImage.trim().length > 0;
    const validateCardRare = cardRare.trim().length > 0;
    const validateCardAttrs = cardAttr1.length > 0
    && cardAttr2.length > 0
    && cardAttr3.length > 0;

    const maxSum = 210;
    const minCardAttr = 0;
    const maxCardAttr = 90;
    const validateCardAttr1 = cardAttr1 <= maxCardAttr && cardAttr1 >= minCardAttr;
    const validateCardAttr2 = cardAttr2 <= maxCardAttr && cardAttr2 >= minCardAttr;
    const validateCardAttr3 = cardAttr3 <= maxCardAttr && cardAttr3 >= minCardAttr;
    const attrSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const resultAtrrSum = attrSum <= maxSum;

    // const cardTrunfoChecked = cardTrunfo;

    const validateButton = validateCardName
      && validateCardDescription
      && validateCardImage
      && validateCardRare
      && validateCardAttrs
      && resultAtrrSum
      && validateCardAttr1
      && validateCardAttr2
      && validateCardAttr3;

    this.setState({
      isSaveButtonDisabled: !validateButton,
      // cardTrunfo: cardTrunfoChecked,
    });
  };

  onInputChange = (event) => {
    const { target } = event;
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'cardTrunfo') {
      this.setState({
        [name]: target.checked,
      }, this.validationFields);
    }

    this.setState({
      [name]: value,
    }, this.validationFields);
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, savedCard, hasTrunfo } = this.state;

    const renderCards = savedCard.map((card, index) => (
      <Card
        key={ index }
        cardName={ card.cardName }
        cardDescription={ card.cardDescription }
        cardAttr1={ card.cardAttr1 }
        cardAttr2={ card.cardAttr2 }
        cardAttr3={ card.cardAttr3 }
        cardImage={ card.cardImage }
        cardRare={ card.cardRare }
        cardTrunfo={ card.cardTrunfo }
      />
    ));

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          // disabled={ isSaveButtonDisabled }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        { renderCards }
      </div>
    );
  }
}

export default App;
