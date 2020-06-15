def fillable(stock, merch, n):
  if merch in stock and stock.get(merch) >= n:
    return True
  else:
    return False