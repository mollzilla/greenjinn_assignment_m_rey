import React from 'react';
import '../styles/styles.css';
import Paper from '@material-ui/core/Paper';
import ColorButton from '@material-ui/core/Button';

export default function CositoDeArriba(props) {

  const { pairData, handlePairChange, clearPairSelection, pair } = props;

  const onPairSelect = (symbol, description) => {
    handlePairChange(symbol, description);
  }

  return (
    <div>
      <Paper elevation={3} className="trading-pairs-paper cosito-de-arriba">
        <div className="button-container header">
          <h4>Choose Pair</h4>
          <ColorButton
            onClick={() => clearPairSelection() }
            variant="contained"
            color="primary"
            className="clear-pair-selection"
          >
            Clear pair selection
          </ColorButton>
        </div>
        <div className="button-container">
          {pairData.map((onePair, i) =>
            <ColorButton
              onClick={() => { onPairSelect(onePair.url_symbol, onePair.description) }}
              variant="contained"
              color="primary"
              className={`${onePair.url_symbol===pair.symbol ? "selected pair-button" : "pair-button"}`}
              key={i}>
              {onePair.description}
            </ColorButton>
          )}
        </div>
      </Paper>
    </div>
  )
}