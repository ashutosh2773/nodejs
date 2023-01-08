// class tvs{
//     name = "apache"
//     price= 200000
//     cc = 250
// }
// let data= new tvs()

// console.log(data.name)
// console.log(data.cc)


// class honda{
//     name = "shine"
//     price= 70000
//     cc = 90
// }

  

// let data1 = new honda()
// console.log(data1.name)
// console.log(data1.price)


class honda{
    name = "shine"
    price= 70000
    cc = 90

    itm(){
       console.log('hello itm',this.price)
    }

    mits(){
        console.log('ashutosh',this.cc + ' and ' + this.price)
    }

    constructor(){
        console.log('pandey g' , this.name)
    }

    static rjit(){
        console.log('hello rjit')
    }
}

//let data1 = new honda()

//data1.itm()
//data1.mits()

honda.rjit()