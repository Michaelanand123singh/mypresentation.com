export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };
  
  export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  