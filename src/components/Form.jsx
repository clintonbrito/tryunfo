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
      handleChange,
      isDisabled,
    } = this.props;

    return (
      <form>
        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            name="cardName"
            id="cardName"
            data-testid="name-input"
            onChange={ handleChange }
            value={ cardName }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="textarea"
            name="description"
            id="description"
            data-testid="description-input"
            onChange={ handleChange }
            value={ cardDescription }
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            type="number"
            name="attr1"
            id="attr1"
            data-testid="attr1-input"
            onChange={ handleChange }
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            type="number"
            name="attr2"
            id="attr2"
            data-testid="attr2-input"
            onChange={ handleChange }
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input
            type="number"
            name="attr3"
            id="attr3"
            data-testid="attr3-input"
            onChange={ handleChange }
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="imageInput">
          Imagem
          <input
            type="text"
            name="imageInput"
            id="imageInput"
            data-testid="image-input"
            onChange={ handleChange }
            value={ cardImage }
          />
        </label>
        <label htmlFor="rarety">
          Raridade
          <select
            type="select"
            name="rarety"
            id="rarety"
            data-testid="rare-input"
            // onChange={ handleChange }
            value={ cardRare }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="checkboxSuperTrunfo">
          Super Trybe Trunfo
          <input
            type="checkbox"
            name="checkboxSuperTrunfo"
            id="checkboxSuperTrunfo"
            data-testid="trunfo-input"
            onChange={ handleChange }
            // checked
            // value={  }
          />
          <label htmlFor="saveButton">
            <button
              type="button"
              name="saveButton"
              id="saveButton"
              data-testid="save-button"
              disabled={ isDisabled }
              // value={ isSaveButtonDisabled }
            >
              Salvar
            </button>
          </label>
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
