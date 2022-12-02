# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// let a=7
// let b=3
// let string='a*b=c'
// console.log(string.slice(0, string.indexOf('=')))

// let op=['a', '+', 'b', '=', 'c']

// console.log(eval(string.slice(0, string.indexOf('='))))
// op.map((o)=>{
//     // console.log(o)
// })


// var s = "Hello world";
// var index = 3;
// s = s.substring(0, index) + 'x' + s.substring(index + 1);
// console.log(s)

// let str='a*b+c'
// str.split(/([-+*\/])/g);
// console.log(str.replace(/([-+*\/])/g,' '))


// let str='test 4 with test 9'


//  let newStringArray = str.split(" ");
//     newStringArray[1] = 7;
//     let newString = newStringArray.join(" ");
//     console.log(newString)


let str='c=a+b'
//       (str.substring(str.indexOf('=') + 1).replace(/([-+*\/])/g, ' ')).split(' ').forEach((temp) => {
//         console.log(temp)
//  })
 
 
// str.substring(str.indexOf('=') + 1).replace(/([-+*\/])/g, ' ').split(' ').map((item)=>{
//     //  console.log(str.replace(/([a\/])/g, '32'))
//     console.log(item)
// console.log(str.replace(`${item}`, '32'))
//  })
 


let test="test 10 with testf 2"
let indexes=[{index: 1, varName: 'a'},{index: 4, varName: 'b'}]

let randomAnswers=[]
indexes.map((item)=>{
    // console.log(test.split(' ')[item.index])
    randomAnswers.push(test.split(' ')[item.index])
    })
    console.log(randomAnswers)
    // console.log(indexes)
    let eqn='c=a*b'
    // console.log(eqn.substring(eqn.indexOf('=') + 1).split(/([-+*\/])/g))
    let vars=indexes.map(item=>item.varName)
    // console.log(vars)
    let filterdEqn=eqn.substring(eqn.indexOf('=') + 1).split(/([-+*\/])/g)
 vars.map((item)=>{
     var index = filterdEqn.indexOf(item);
     filterdEqn.splice(index, 1);
 })
    console.log(typeof(filterdEqn[0]))
    
    let ansStr=''
    let ans=randomAnswers.forEach((item,i,arr)=>{
        if(arr.length-1==i){
             ansStr+=item
        }else{
            
        ansStr+=item+filterdEqn[0]
        }
        
            
    })
console.log(eval(ansStr))
// let ans=randomAnswers.forEach((e1)=>filterdEqn.forEach((e2)=>{
//     console.log(eval(e1,))
// }))
// console.log(eval('10 + 20'))






// var index = array.indexOf(item);
// if (index !== -1) {
//   array.splice(index, 1);
// }






let equation='c=a+b*d'
let vars=['a','b','d']
    
let filterdEqn=equation.substring(equation.indexOf('=') + 1).split(/([-+*\/])/g)  
      
   
      vars.forEach((item) => {
        let i=equation.substring(equation.indexOf('=') + 1).split(/([-+*\/])/g).indexOf(item)
 if(i!== -1){
    let ind=filterdEqn.indexOf(item)
    filterdEqn.splice(ind,1)
 }
})
      console.log(filterdEqn)
      
      let randomAnswers=[10,40,70]
      
      
         let ansStr = ''
     
// randomAnswers.forEach((item,i,arr)=>filterdEqn.forEach((op)=>{
    
//     console.log(item,op)
//         if(arr.length-1==i){
//              ansStr+=item
//         }else{
            
//         ansStr+=item+op
//         }
// }))

// console.log(ansStr)
      
      randomAnswers.forEach((ans,i,arr)=>{
           if(arr.length-1==i){
             ansStr+=ans
        }else{
            console.log(arr.length)
        ansStr+=ans+filterdEqn[i]
        }
      })
      console.log(ansStr)
      console.log(eval('(10+40)*70'))
      
      
      
      

 
 

