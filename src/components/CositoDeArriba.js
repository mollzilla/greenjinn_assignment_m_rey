import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
// import './index.css';
// import App from './App';
import Paper from '@material-ui/core/Paper';
import ColorButton from '@material-ui/core/Button';

export default function CositoDeArriba(props) {

  const { pairsData, handlePairChange, pairs } = props;


  const onPairSelect = (symbol) => {
    handlePairChange(symbol);
    // if()
  }

  useEffect(() => {

  }, [pairs]);

  return (
    <div>
      <Paper elevation={3} className="trading-pairs-paper cosito-de-arriba">
        <div className="button-container header">
          <h4>Choose Pair</h4>
          <ColorButton
            onClick={() => { }}
            variant="contained"
            color="primary"
            className="clear-pair-selection"
          >
            Clear pair selection
          </ColorButton>
        </div>
        <div className="button-container">
          {pairsData.length && pairsData.map((pair, i) =>
            <ColorButton
              onClick={() => { onPairSelect(pair.url_symbol) }}
              variant="contained"
              color="primary"
              className={` ${Object.values(pairs).includes(pair.url_symbol) ? "selected pair-button" : "pair-button"}`}
              key={i}>
              {pair.description}
            </ColorButton>
          )}
        </div>
      </Paper>
    </div>
  )
}