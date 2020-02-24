const sc = floor =>
  floor > 1 ? `${(`Aa~ `).repeat(floor - 1)}Pa!${floor <= 6 ? ` Aa!` : ''}` : '';

console.log(sc(10));