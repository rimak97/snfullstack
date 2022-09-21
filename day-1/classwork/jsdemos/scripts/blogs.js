const getBlogs=(callbackDemo)=>{
    setTimeout(() => {
        callbackDemo({
            title: 'Welcome to my app'
        })
    },2000)
}

// const mydata=getBlogs()
// console.log(mydata.title);

getBlogs((cb) => {
    console.log(cb.title);
})

