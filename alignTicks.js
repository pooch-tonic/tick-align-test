const multiples = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]


const getQuantityExp = value => {
  return Math.floor(Math.log(value)/Math.LN10)
}

const getQuantity = value => {
  return Math.pow(10, getQuantityExp(value))
}

const getNiceValue = value => {
  const exponent = getQuantityExp(value)
  const exp10 = Math.pow(10, exponent)
  const f = value / exp10
  let nf
  for (let i = 0; i < multiples.length; i++) {
    if (f < multiples[i]) {
      nf = multiples[i]
      break
    }
  }
  let returnValue = nf * exp10
  return exponent >= -20
  	? +returnValue.toFixed(
  	  exponent < 0 
      	? -exponent 
        : 0
  	  ) 
    : returnValue
}


const normalizeTickInterval = (min, max) => {
  const quantityExponent = Math.floor(Math.log(max)/Math.LN10)
  const quantity = Math.pow(10, quantityExponent)
  console.log(quantityExponent, quantity)
  const maxMagnitudeBase10 = Math.pow(10, Math.floor(Math.log10(max)))
  const factor = correctFactor(max / maxMagnitudeBase10)
  const maxMagnitude = factor * maxMagnitudeBase10
  // console.log(factor, maxMagnitudeBase10, maxMagnitude)
  // round to a tenfold of 1, 2, 2.5 or 5
  // magnitude = H.pick(magnitude, 1)
  const magnitude = 2.5
  // const normalized = initialInterval / magnitude
  // multiples for a linear scale

    

  // normalize the interval to the nearest multiple

  // Multiply back to the correct magnitude. Correct floats to appropriate
  // precision (#6085).
  const precision = -Math.round(Math.log(0.001) / Math.LN10)
  /*retInterval = parseFloat(retInterval.toPrecision(precision || 14))
  return retInterval*/
}

const res = (normalizeTickInterval(0, 756756))
//document.getElementById("result").innerHTML = res