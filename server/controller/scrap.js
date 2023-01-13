import puppeteer  from "puppeteer";
// const url = "https://www.flipkart.com/cosmic-byte-cb-gk-26-pandora-tkl-mechanical-keyboard-outemu-red-switches-wired-usb-gaming/p/itm82b2d6fee9aaf?pid=ACCG9H63FTCFEQ8F&lid=LSTACCG9H63FTCFEQ8FP0HAJP&marketplace=FLIPKART&q=mechanical+keyboard&store=4rr%2Fkm5%2F3oe&srno=s_1_8&otracker=AS_QueryStore_OrganicAutoSuggest_2_11_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_11_na_na_na&fm=search-autosuggest&iid=77726e0c-c65b-4dd0-916f-dd1c5df98d86.ACCG9H63FTCFEQ8F.SEARCH&ppt=sp&ppn=sp&ssid=px3cjq4uy80000001673120588803&qH=a792c83875887481"

const url = "https://www.amazon.in/Crucial-PC4-25600-SODIMM-260-Pin-Memory/dp/B08C4Z69LN/ref=pd_day0fbt_img_sccl_1/262-4525783-7095863?pd_rd_w=4FZ3w&content-id=amzn1.sym.c9d7333c-5685-4a7f-8a29-2b2d0619c7f9&pf_rd_p=c9d7333c-5685-4a7f-8a29-2b2d0619c7f9&pf_rd_r=Y5SNEHSTVTS0V2N1D9D2&pd_rd_wg=P2ANJ&pd_rd_r=e61a6258-36d7-445e-844c-68485691096b&pd_rd_i=B08C4Z69LN&th=1"

const main = async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)
    await page.screenshot({path: 'ss.png'})
    await browser.close()
    // res.send("hh")
}

export default main