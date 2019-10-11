# NTUEE_PLUS_WEB
## Run
```bash
$ npm install
$ npm start
```

## 20191008~20191021

#### 分頭進行程式
> * noidname01 : Login Page/ Contact Us
> * martinooh : About Us/ Support Us
> * mhsuab : Home(App)
> * anitalu724 : NavBar

>   **注意事項**
>    - 每個頁面包含一個js和一個css檔案
>    - css請統一用id
>    - 每個介面都會有Navigation Bar，可以先空著沒關係
>    - 網頁實體圖請參考[NTUEE+規劃網頁](https://hackmd.io/@eOq5K6tyQl-8mimmimYygQ/Hy7bepVDB/edit)

## 20191011
> * 更新項目：src/component/AppBar.js, src/component/Logo.js, src/index.js
> * 安裝項目：
  ```bash
  $ npm install @material-ui/core
  $ npm install @material-ui/styles
  ```
> * 說明：新增兩個component，Logo.js被AppBar.js呼叫，AppBar.js完成「登錄以前的Navigation Bar」。AppBar呼叫方式呈現在index.js中，如下圖。
> ![](https://imgur.com/hSJdqYr)
> 呈現如下圖
> ![](https://imgur.com/U3wkdZe)