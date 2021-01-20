export const resolveText = "this is test service";
export class UnitTestingService {

  getDetails() {
    var data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(resolveText);
      }, 5000);
    });

    return data;
  }
}
