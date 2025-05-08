const formString = (param: string, toUpper?: boolean): string => {
    return toUpper ? param.toUpperCase() : param.toLowerCase()
};

const strdata = formString('hello');
// console.log(strdata);


interface Book {
    title: string;
    rating: number;
};

const filterByRating = (items: { title: string; rating: number; }[]): { title: string; rating: number; }[] => {
    if (!items) {
        return [];
    } else {
        return items.filter(item => item.rating >= 4);
    }
};

const books = [
    { title: "Book A", rating: 4.1 },
    { title: "Book B", rating: 3.4 },
    { title: "Book C", rating: 4.5 }
];

const booksData = filterByRating(books);
console.log(booksData);


const concatenateArrays = <T>(...arrays: Array<T>[]): Array<T> => {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
};


// const ar1 = ['x', 'y', 'z'];
// const ar2 = ["1"];
// const stradta: Array<string> = concatenateArrays(ar1, ar2);
// console.log(stradta);


class Vehicle {
    private make: string;
    private year: string;

    constructor(make: string, year: string) {
        this.make = make;
        this.year = year;
    };

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
};

class Car extends Vehicle {
    private model: string;

    constructor(model: string, make: string, year: string) {
        super(make, year);
        this.model = model;
    };

    getModel(): string {
        return `Model: ${this.model}`;
    }
}

const vehicalData = new Car("Mustang", "Ford", "2022");
// console.log(vehicalData.getInfo());
// console.log(vehicalData.getModel());


const processValue = (value: string | number): number => {

    return typeof value === "string" ? value.length : value *2
}

// const processData = processValue(20);
// const processData = processValue("hello"); ;



interface Product {
    name: string;
    price: number;
};

const getMostExpensiveProduct = (products: Array<Product>) => {
    return products.length
    ? products.reduce((max, curr) => (max.price > curr.price ? max : curr))
    : null;
}

const products = [
    { name: "Pen", price: 1000 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 500 }
];

const productData = getMostExpensiveProduct(products);
// console.log(productData);


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const getDayType = (day: Day): string => {
  return  day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday"
};

const dayTypeData = getDayType(Day.Friday);
// console.log(dayTypeData);


const squareAsync = async (value: number): Promise<number> => {
    if (value < 0) {
        throw new Error('Negative numbers are not allowed');
    } else {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(value * value);
            }, 1000);
        })
    }
};

squareAsync(-3).then(result => {
    // console.log(result);
}).catch(err => {
    // console.error("Error:", err.message);
});