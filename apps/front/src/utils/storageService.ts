const storageService = {
  getItem: (key: string) => {
    window.localStorage.getItem(key);
  },
  setItem: (key: string, value: any) => {
    window.localStorage.setItem(key, value)
  },
  clearItem: (key: string) => {
    window.localStorage.removeItem(key);
  }
}

export default storageService;
