const profitableGamble = (prob, prize, pay) => { 
	return (prob * prize > pay ? true : false)
}
