const handleChange = e => {
  const { name, type, value } = e.target;
  const val = type === 'number' ? parseFloat(value) : value;
  this.setState({ [name]: val });
};

export default handleChange;
