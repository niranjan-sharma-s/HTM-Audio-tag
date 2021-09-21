const sound = document.getElementById('horse')
const btn = document.getElementById('btn')

console.log(sound , btn)

btn.addEventListener('click' , () => {
    document.body.style.backgroundImage="url('https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
    document.body.style.backgroundRepeat='no-repeat'
    document.body.style.backgroundSize='cover'
    horse.play()
})