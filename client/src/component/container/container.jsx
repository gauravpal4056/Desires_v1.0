import Card from "../cards/card"

const links = [
    "https://www.flipkart.com/thermomate-pen-type-portable-ph-meter-water-tester-testers/p/itm57f9644cff150?pid=PMRGJFRJYMVRVFGF&lid=LSTPMRGJFRJYMVRVFGFRJHD00&marketplace=FLIPKART&store=gsx%2Fgkc%2F4y5&srno=b_1_3&otracker=browse&iid=2a01205e-3eb3-4ae9-bef4-6f9722bade21.PMRGJFRJYMVRVFGF.SEARCH&ssid=pt4uay86ao0000001673577275962",
    "https://www.flipkart.com/motorola-edge-30-fusion-viva-magenta-128-gb/p/itmbd04903ac45f7?pid=MOBGKV3EFHKFRMRR&param=54532&otracker=clp_bannerads_1_3.bannerAdCard.BANNERADS_Moto%2Bedge%2B30%2Bf_mobile-phones-store_PPPDE5N2M4DX",
    "https://www.flipkart.com/infinix-zero-ultra-coslight-silver-256-gb/p/itm79c1afc8d28d3?pid=MOBGKQZFKEHZDXDZ&lid=LSTMOBGKQZFKEHZDXDZN7WQII&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3AMOBGKV3EFHKFRMRR%3Bpt%3App%3Buid%3A19087cff-931b-11ed-8720-473fb483460e%3B.MOBGKQZFKEHZDXDZ&ppt=pp&ppn=pp&ssid=pt4uay86ao0000001673577275962&otracker=pp_reco_Similar%2BProducts_1_34.productCard.PMU_HORIZONTAL_Infinix%2BZero%2BUltra%2B%2528Coslight%2BSilver%252C%2B256%2BGB%2529_MOBGKQZFKEHZDXDZ_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=MOBGKQZFKEHZDXDZ",
    "https://www.flipkart.com/meetion-mt-hp030-wired-gaming-headset/p/itmecd29cb861622?pid=ACCG635DHXJSESTV&lid=LSTACCG635DHXJSESTVG5S3O8&marketplace=FLIPKART&store=0pm%2Ffcn%2Fgc3%2Frph&srno=b_1_2&otracker=pp_reco_You%2Bmight%2Bbe%2Binterested%2Bin_3_33.dealCard.OMU_cid%3AS_F_N_0pm_fcn_gc3_rph__d_50-100__NONE_ALL%3Bnid%3A0pm_fcn_gc3_rph_%3Bet%3AS%3Beid%3A0pm_fcn_gc3_rph_%3Bmp%3AF%3Bct%3Ad%3B&otracker1=pp_reco_PINNED_productRecommendation%2FAugmentSelling_You%2Bmight%2Bbe%2Binterested%2Bin_BANNER_HORIZONTAL_dealCard_cc_3_NA_view-all&fm=productRecommendation%2Fsimilar&iid=en_mvnfYj0vbkMG5IAbN3e0kFmYCMuz2EjUL3vzTZNGq2SFW0xX9tv0NQBpjwPRsV6W0%2FsrJeUvOKcRHSUqvsCQXg%3D%3D&ppt=pp&ppn=pp&ssid=dkqaglu3io0000001673598090967",
    "https://www.flipkart.com/oneplus-u1s-164-cm-65-inch-ultra-hd-4k-led-smart-android-tv-far-field-dolby-audio/p/itm8625fe03919f2?pid=TVSG3E9A3MNZUTQK&lid=LSTTVSG3E9A3MNZUTQK1JLVUD&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_a531296f-49cb-4495-9f49-169c9fa9b42b_25_245GT8B26TF5_MC.TVSG3E9A3MNZUTQK&ppt=pp&ppn=pp&ssid=e2gx3nclwg0000001673600052984&otracker=clp_pmu_v2_Large%2BScreen%2BTVs_1_25.productCard.PMU_V2_OnePlus%2BU1S%2B164%2Bcm%2B%252865%2Binch%2529%2BUltra%2BHD%2B%25284K%2529%2BLED%2BSmart%2BAndroid%2BTV%2Bwith%2BFar%2Bfield%2Band%2BDolby%2BAudio_television-store_TVSG3E9A3MNZUTQK_neo%2Fmerchandising_0&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Large%2BScreen%2BTVs_LIST_productCard_cc_1_NA_view-all&cid=TVSG3E9A3MNZUTQK",
    "https://www.flipkart.com/sens-dwinci-165-cm-65-inch-qled-ultra-hd-4k-smart-google-tv-lumisens-panel-dolby-vision-atmos/p/itm16962f791e29f?pid=TVSGHY2BYXDUM5MX&lid=LSTTVSGHY2BYXDUM5MX9AK7UW&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_a531296f-49cb-4495-9f49-169c9fa9b42b_25_245GT8B26TF5_MC.TVSGHY2BYXDUM5MX&ppt=pp&ppn=pp&ssid=e2gx3nclwg0000001673600052984&otracker=clp_pmu_v2_Large%2BScreen%2BTVs_3_25.productCard.PMU_V2_SENS%2BDwinci%2B165%2Bcm%2B%252865%2Binch%2529%2BQLED%2BUltra%2BHD%2B%25284K%2529%2BSmart%2BGoogle%2BTV%2BLumiSENS%2BPanel%252C%2BDolby%2BVision%2Band%2BDolby%2BAtmos_television-store_TVSGHY2BYXDUM5MX_neo%2Fmerchandising_2&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Large%2BScreen%2BTVs_LIST_productCard_cc_3_NA_view-all&cid=TVSGHY2BYXDUM5MX",

]
const Container = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center place-items-center pt-20">
                {links.map((link) => {return <Card link={link} />})}
                
            </div>
        </>
    )
}

export default Container