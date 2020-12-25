

export class Utils {

    public static newResolvedPromise<T>(value: T): Promise<T> {
        return new Promise((resolve, reject) => resolve(value));
    }

}