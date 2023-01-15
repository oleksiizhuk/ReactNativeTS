class NetworkService {
  public async getSomeThink(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('test');
      }, 300);
    });
  }
}

export default new NetworkService();
