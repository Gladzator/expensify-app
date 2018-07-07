import numeral from 'numeral';
export default  (props) => {
  // load a locale
  try{
  numeral.register('locale', 'hi', {
      delimiters: {
          thousands: ',',
          decimal: '.'
      },
      abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't'
      },
      currency: {
          symbol: '₹'
      }
  });

  // switch between locales
  numeral.locale('hi');
}catch(e){
  
}
}
