
// form change section
const sell_btn = document.getElementById("sell-btn")
const buy_btn = document.getElementById("buy-btn")

const sell_form = document.getElementById("sell-form")
const buy_form = document.getElementById("buy-form")



sell_btn.addEventListener("click", () => {
    sell_btn.classList.replace("bg-[#14141F]", "bg-[#df1616]")
    buy_btn.classList.replace("bg-[#1BA27A]", "bg-[#14141F]")
    sell_form.classList.replace("hidden", "flex")
    buy_form.classList.replace("flex", "hidden")
})

buy_btn.addEventListener("click", () => {
    sell_btn.classList.replace("bg-[#df1616]", "bg-[#14141F]")
    buy_btn.classList.replace("bg-[#14141F]", "bg-[#1BA27A]")
    buy_form.classList.replace("hidden", "flex")
    sell_form.classList.replace("flex", "hidden")

})


// form dropdown section


// buy_dropdown_1 part
const buy_dropdown_1 = document.querySelector(".buy_dropdown_1")
const buy_dropdown_1_img = document.querySelector("#buy_dropdown_1_img")
const buy_dropdown_1_title = document.querySelector("#buy_dropdown_1_title")

// buy_dropdown_2 part
const buy_dropdown_2 = document.querySelector(".buy_dropdown_2")
const buy_dropdown_2_img = document.querySelector("#buy_dropdown_2_img")
const buy_dropdown_2_title = document.querySelector("#buy_dropdown_2_title")


// sell_dropdown_1 part
const sell_dropdown_1 = document.querySelector(".sell_dropdown_1")
const sell_dropdown_1_img = document.querySelector("#sell_dropdown_1_img")
const sell_dropdown_1_title = document.querySelector("#sell_dropdown_1_title")


// sell_dropdown_2 part
const sell_dropdown_2 = document.querySelector(".sell_dropdown_2")
const sell_dropdown_2_img = document.querySelector("#sell_dropdown_2_img")
const sell_dropdown_2_title = document.querySelector("#sell_dropdown_2_title")



const coins_list_dropdown_1 = `   <li onclick="selecte_coin_dropdown_1('${"TMN"}','${"/public/toman.svg"}')">
                                                <a dir="ltr">
                                                    <img class="w-5 h-5" src="/public/toman.svg" alt="TMN">
                                                    <p class="text-[#0B0B0F] text-lg ">TMN</p>
                                                </a>
                                            </li>

                                            <li onclick="selecte_coin_dropdown_1('${"BTC"}','${"/public/btc.png"}')">
                                                <a dir="ltr">
                                                    <img class="w-5 h-5" src="/public/btc.png" alt="BTC">
                                                    <p class="text-[#0B0B0F] text-lg ">BTC</p>
                                                </a>
                                            </li>

                                            <li onclick="selecte_coin_dropdown_1('${"ETH"}','${"/public/eth.png"}')">
                                                <a dir="ltr">
                                                    <img class="w-5 h-5" src="/public/eth.png" alt="ETH">
                                                    <p class="text-[#0B0B0F] text-lg ">ETH</p>
                                                </a>
                                            </li>

                                            <li onclick="selecte_coin_dropdown_1('${"DOG"}','${"/public/dog.png"}')">
                                                <a dir="ltr">
                                                    <img class="w-5 h-5" src="/public/dog.png" alt="DOG">
                                                    <p class="text-[#0B0B0F] text-lg ">DOG</p>
                                                </a>
                                            </li>

                                            <li onclick="selecte_coin_dropdown_1('${"CAR"}','${"/public/cardano.png"}')">
                                                <a dir="ltr">
                                                    <img class="w-5 h-5" src="/public/cardano.png" alt="CARDANO">
                                                    <p class="text-[#0B0B0F] text-lg ">CARDANO</p>
                                                </a>
                                            </li>`

const coins_list_dropdown_2 = ` <li onclick="selecte_coin_dropdown_2('${"TMN"}','${"/public/toman.svg"}')">
                                                <a dir="ltr">
                                                    <img class="w-5 h-5" src="/public/toman.svg" alt="TMN">
                                                    <p class="text-[#0B0B0F] text-lg ">TMN</p>
                                                </a>
                                            </li>

                                            <li onclick="selecte_coin_dropdown_2('${"BTC"}','${"/public/btc.png"}')">
                                                <a dir="ltr">
                                                    <img class="w-5 h-5" src="/public/btc.png" alt="BTC">
                                                    <p class="text-[#0B0B0F] text-lg ">BTC</p>
                                                </a>
                                            </li>

                                            <li onclick="selecte_coin_dropdown_2('${"ETH"}','${"/public/eth.png"}')">
                                                <a dir="ltr">
                                                    <img class="w-5 h-5" src="/public/eth.png" alt="ETH">
                                                    <p class="text-[#0B0B0F] text-lg ">ETH</p>
                                                </a>
                                            </li>

                                            <li onclick="selecte_coin_dropdown_2('${"DOG"}','${"/public/dog.png"}')">
                                                <a dir="ltr">
                                                    <img class="w-5 h-5" src="/public/dog.png" alt="DOG">
                                                    <p class="text-[#0B0B0F] text-lg ">DOG</p>
                                                </a>
                                            </li>

                                            <li onclick="selecte_coin_dropdown_2('${"CAR"}','${"/public/cardano.png"}')">
                                                <a dir="ltr">
                                                    <img class="w-5 h-5" src="/public/cardano.png" alt="CARDANO">
                                                    <p class="text-[#0B0B0F] text-lg ">CARDANO</p>
                                                </a>
                                            </li>`

const coins_list_dropdown_3 = ` <li onclick="selecte_coin_dropdown_3('${"TMN"}','${"/public/toman.svg"}')">
                                    <a dir="ltr">
                                    <img class="w-5 h-5" src="/public/toman.svg" alt="TMN">
                                    <p class="text-[#0B0B0F] text-lg ">TMN</p>
                                     </a>
                                </li>
                                            
                                                                                        <li onclick="selecte_coin_dropdown_3('${"BTC"}','${"/public/btc.png"}')">
                                                                                            <a dir="ltr">
                                                                                                <img class="w-5 h-5" src="/public/btc.png" alt="BTC">
                                                                                                <p class="text-[#0B0B0F] text-lg ">BTC</p>
                                                                                            </a>
                                                                                        </li>
                                            
                                                                                        <li onclick="selecte_coin_dropdown_3('${"ETH"}','${"/public/eth.png"}')">
                                                                                            <a dir="ltr">
                                                                                                <img class="w-5 h-5" src="/public/eth.png" alt="ETH">
                                                                                                <p class="text-[#0B0B0F] text-lg ">ETH</p>
                                                                                            </a>
                                                                                        </li>
                                            
                                                                                        <li onclick="selecte_coin_dropdown_3('${"DOG"}','${"/public/dog.png"}')">
                                                                                            <a dir="ltr">
                                                                                                <img class="w-5 h-5" src="/public/dog.png" alt="DOG">
                                                                                                <p class="text-[#0B0B0F] text-lg ">DOG</p>
                                                                                            </a>
                                                                                        </li>
                                            
                                                                                        <li onclick="selecte_coin_dropdown_3('${"CAR"}','${"/public/cardano.png"}')">
                                                                                            <a dir="ltr">
                                                                                                <img class="w-5 h-5" src="/public/cardano.png" alt="CARDANO">
                                                                                                <p class="text-[#0B0B0F] text-lg ">CARDANO</p>
                                                                                            </a>
                                                                                        </li>`


const coins_list_dropdown_4 = ` <li onclick="selecte_coin_dropdown_4('${"TMN"}','${"/public/toman.svg"}')">
                                                                                                                            <a dir="ltr">
                                                                                                                            <img class="w-5 h-5" src="/public/toman.svg" alt="TMN">
                                                                                                                            <p class="text-[#0B0B0F] text-lg ">TMN</p>
                                                                                                                             </a>
                                                                                                                        </li>
                                                                                                                                    
                                                                                                                                                                                <li onclick="selecte_coin_dropdown_4('${"BTC"}','${"/public/btc.png"}')">
                                                                                                                                                                                    <a dir="ltr">
                                                                                                                                                                                        <img class="w-5 h-5" src="/public/btc.png" alt="BTC">
                                                                                                                                                                                        <p class="text-[#0B0B0F] text-lg ">BTC</p>
                                                                                                                                                                                    </a>
                                                                                                                                                                                </li>
                                                                                                                                    
                                                                                                                                                                                <li onclick="selecte_coin_dropdown_4('${"ETH"}','${"/public/eth.png"}')">
                                                                                                                                                                                    <a dir="ltr">
                                                                                                                                                                                        <img class="w-5 h-5" src="/public/eth.png" alt="ETH">
                                                                                                                                                                                        <p class="text-[#0B0B0F] text-lg ">ETH</p>
                                                                                                                                                                                    </a>
                                                                                                                                                                                </li>
                                                                                                                                    
                                                                                                                                                                                <li onclick="selecte_coin_dropdown_4('${"DOG"}','${"/public/dog.png"}')">
                                                                                                                                                                                    <a dir="ltr">
                                                                                                                                                                                        <img class="w-5 h-5" src="/public/dog.png" alt="DOG">
                                                                                                                                                                                        <p class="text-[#0B0B0F] text-lg ">DOG</p>
                                                                                                                                                                                    </a>
                                                                                                                                                                                </li>
                                                                                                                                    
                                                                                                                                                                                <li onclick="selecte_coin_dropdown_4('${"CAR"}','${"/public/cardano.png"}')">
                                                                                                                                                                                    <a dir="ltr">
                                                                                                                                                                                        <img class="w-5 h-5" src="/public/cardano.png" alt="CARDANO">
                                                                                                                                                                                        <p class="text-[#0B0B0F] text-lg ">CARDANO</p>
                                                                                                                                                                                    </a>
                                                                                                                                                                                </li>`
                                                                                                                                                                                
window.addEventListener("DOMContentLoaded", () => {

    buy_dropdown_1.insertAdjacentHTML("beforeend", coins_list_dropdown_1)
    buy_dropdown_2.insertAdjacentHTML("beforeend", coins_list_dropdown_2)
    sell_dropdown_1.insertAdjacentHTML("beforeend", coins_list_dropdown_3)
    sell_dropdown_2.insertAdjacentHTML("beforeend", coins_list_dropdown_4)

})





// select coins
function selecte_coin_dropdown_1(title, img) {
    buy_dropdown_1_img.setAttribute("src", img)
    buy_dropdown_1_title.innerHTML = title
}

function selecte_coin_dropdown_2(title, img) {
    buy_dropdown_2_img.setAttribute("src", img)
    buy_dropdown_2_title.innerHTML = title
}

function selecte_coin_dropdown_3(title, img) {
    sell_dropdown_1_img.setAttribute("src", img)
    sell_dropdown_1_title.innerHTML = title
}

function selecte_coin_dropdown_4(title, img) {
    sell_dropdown_2_img.setAttribute("src", img)
    sell_dropdown_2_title.innerHTML = title
}

