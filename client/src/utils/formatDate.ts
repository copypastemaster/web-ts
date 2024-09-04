const formatDate = (dateString: string): string => {
  const date: Date = new Date(dateString);
  
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};


export default formatDate