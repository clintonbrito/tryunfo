import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="cardName"
            id="name"
            data-testid="name-input"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            name="cardDescription"
            id="description"
            data-testid="description-input"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            type="number"
            name="cardAttr1"
            id="attr1"
            data-testid="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            type="number"
            name="cardAttr2"
            id="attr2"
            data-testid="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input
            type="number"
            name="cardAttr3"
            id="attr3"
            data-testid="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="imageInput">
          Imagem
          <input
            type="text"
            name="cardImage"
            id="imageInput"
            data-testid="image-input"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>
        <label htmlFor="rarety">
          Raridade
          <select
            type="select"
            name="cardRare"
            id="rarety"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        { hasTrunfo ? (
          <p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <label htmlFor="checkboxSuperTrunfo">
            Super Trybe Trunfo
            <input
              type="checkbox"
              name="cardTrunfo"
              id="checkboxSuperTrunfo"
              data-testid="trunfo-input"
              onChange={ onInputChange }
              checked={ cardTrunfo }
            />
          </label>)}
        <label htmlFor="saveButton">
          <button
            type="button"
            name="saveButton"
            id="saveButton"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
