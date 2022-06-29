// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    async isVisible(selector) { 
      const formValue = await this.grabNumberOfVisibleElements(selector);

      return (formValue);
    }
  });
}
