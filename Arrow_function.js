// const user =(a,s)=>{
//     console.log('ashu ashu');
//     console.log(a+s);
// }

// user(4,5);



// function itm(){
//     return 1 
    
// }
// const mits = function(){
//     return 1
// }
// const rjit = ()=>{

//     return 1
// }

const user = ()=>console.log('hello user')
 
user()



// let data =[10,20,30,40,50]

		// let test1 =function()
		// {
		// 	return 1
		// }
		// let test2 =()=>{
			
		// 	return 1
		// }

		// let newData = data.map(function(a){
		// 	return a*2
		// })
		

		// let newData =data.map((item)=>item*2)

		// console.log(newData)

		// let item ={
		// 	name:"vikas",
		// 	getName:function()
		// 	{
		// 		console.log("normal",this)
		// 	},
		// 	getNameArrow:()=>{

		// 		
		// 		console.log("arrow",this)
		// 	}
		// }

		// item.getName();


		//const sayHello =()=> console.log("hello")
		//const sayHello =(name)=> console.log("hello" + name)
		//const sayHello = name => console.log("hello" + name)
		//const sayHello = (name,b) => console.log(b+ " " + name)
		// const sayHello = (name,a) =>{
		// 	console.log(a+" " +name)
		// 	console.log("hi")
		// }


		// sayHello("ram","raj")

		const x ={ 
			name:"ram",
			role:"js hello",
			exp :30,
			show:function(){
				// let d =this
				//console.log(this)
				//console.log(this.name)
				// console.log(`the name is ${this.name} \nThe role is ${this.role}`)
				// setTimeout(function(){
				// 	console.log(d)
				// 	console.log(`the name is ${d.name} \nThe role is ${d.role}`)
				// 	//console.log(this.name)

				// },2000)
				setTimeout(()=>{
					console.log(this)
					console.log(`the name is ${this.name} \nThe role is ${this.role}`)
				},2000)


		  }
		}


		
		//sayHello("harry","good morning")
		//console.log(x.name)
		x.show()