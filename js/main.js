function click_menu() {
    let open_menu =  document.getElementById('open_menu');
    open_menu.classList.toggle('click_menu')
    document.querySelector('#x-menu').classList.toggle('x-menu')
    document.querySelector('#burger_menu').classList.toggle('burger-x-menu')
    document.querySelector('#trans').classList.toggle('trans-x')
    document.querySelector('#trans2').classList.toggle('trans-x2')
}



let copy_index = 0;
let add_link = document.querySelector('.add_link');
add_link.addEventListener('click', (e) =>{
    e.preventDefault()
    let inputt = document.querySelector("#input_link").value;
    let input = document.querySelector("#input_link");
    if (inputt.startsWith('https://') || inputt.startsWith('http://') || inputt.startsWith('https://') || inputt.endsWith('.net') || inputt.endsWith('.com') || inputt.endsWith('.net') || inputt.endsWith('.io') || inputt.endsWith('.me') || inputt.endsWith('.ru') || inputt.endsWith('.uz'))  {
        let links_block = document.querySelector('.links_block');
        links_block.innerHTML += `
        <div class="links_block_child">
        <p>
        ${inputt}
        </p>
        <button class="copy${copy_index}" onclick="copy_active()" id="copy">
        Copy
        </button>
        </div>`;
        copy_index++;
        input.value = "";
        input.classList = '';
        document.querySelector('.plase_input p').innerText = ''
    } else {
        input.classList = 'border_red';
        document.querySelector('.plase_input p').innerText = 'Please add a link'
    }
}
)
function copy_active() {
   
}