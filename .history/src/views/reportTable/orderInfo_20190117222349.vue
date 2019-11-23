<template>
    <div>
      <div align="center" style="padding-top:15px;">
      <van-row v-show="type==1" id="rows">
        <div style="height：auto;min-height:600px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 1px 1px;">
          <div style="width:100%;margin-bottom: 30px;padding-top: 15px;">
            <div style="width: 50%;float: left;">
              <span style="color:rgb(30, 131, 255)">运单状态：配送在途</span>
            </div>
          </div>
          <div style="width:100%;padding-bottom: 10px;margin-bottom: 30px;padding-top: 15px;">
            <div style="width: 75%;float: left;">
              <span style="font-size: 15px;color:#333;">运单号：2111156156165156165165</span>
            </div>
          </div>
          <hr style="width: 95%;border: 0.6px solid rgba(128, 128, 128, 0.13);"/>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;"><span style="color:#D9D9D9;font-size: 15px;">发货人：</span><span>李小龙</span></div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;"><span style="color:#D9D9D9;font-size: 15px;">取件地址：</span><span>李小龙</span></div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;"><span style="color:#D9D9D9;font-size: 15px;">发货单位：</span><span>李小龙</span></div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;"><span style="color:#D9D9D9;font-size: 15px;">收件人：</span><span>李小龙</span></div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;"><span style="color:#D9D9D9;font-size: 15px;">收件地址：</span><span>李小龙</span></div>
          <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;"><span style="color:#D9D9D9;font-size: 15px;">收件单位：</span><span>李小龙</span></div>
           <div style="height:auto;min-height: 170px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 1px 1px;">
            <div style="width:100%;margin-bottom: 35px;padding-top: 15px;">
              <div style="width: 70%;float: left;">
                <span style="color:rgb(30, 131, 255)">2111156156165156165165-1</span>
              </div>
            </div>
            <hr style="width: 100%;border: 0.6px solid rgba(128, 128, 128, 0.13);"/>
            <div style="width:100%;margin-bottom: 35px;padding-top: 15px;">
              <div style="width: 22%;float: left;">
                <span style="color:#D9D9D9;font-size: 15px;">商品1</span>
              </div>
            </div>
            <div style="width:100%;margin-bottom: 25px;padding-top: 10px;">
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">重量：</span><span style="color:red;font-size: 16px;font-weight: 700;">2</span><span style="color:#333;font-size: 15px;">kg</span>
              </div>
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">体积：</span><span style="color:red;font-size: 16px;font-weight: 700;">2</span><span style="color:#333;font-size: 15px;">m³</span>
              </div>
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">数量：</span><span style="color:red;font-size: 16px;font-weight: 700;">2</span><span style="color:#333;font-size: 15px;">件</span>
              </div>
            </div>
           </div>
              <div style="height:auto;min-height: 170px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 1px 1px;">
            <div style="width:100%;margin-bottom: 35px;padding-top: 15px;">
              <div style="width: 70%;float: left;">
                <span style="color:rgb(30, 131, 255)">2111156156165156165165-2</span>
              </div>
            </div>
            <hr style="width: 100%;border: 0.6px solid rgba(128, 128, 128, 0.13);"/>
            <div style="width:100%;margin-bottom: 35px;padding-top: 15px;">
              <div style="width: 22%;float: left;">
                <span style="color:#D9D9D9;font-size: 15px;">商品2</span>
              </div>
            </div>
            <div style="width:100%;margin-bottom: 25px;padding-top: 10px;">
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">重量：</span><span style="color:red;font-size: 16px;font-weight: 700;">2</span><span style="color:#333;font-size: 15px;">kg</span>
              </div>
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">体积：</span><span style="color:red;font-size: 16px;font-weight: 700;">2</span><span style="color:#333;font-size: 15px;">m³</span>
              </div>
              <div style="width: 30%;float: left;">
                <span style="color:#333;font-size: 15px;">数量：</span><span style="color:red;font-size: 16px;font-weight: 700;">2</span><span style="color:#333;font-size: 15px;">件</span>
              </div>
            </div>
           </div>
           <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
             <span style="font-size: 15px;color:#333;">回单上传：</span>
           </div>
           <div style="width:85%;height: 30px;text-align: left;margin-bottom: 15px;">
            <div class="fileCon">
              <div class="list">
                <div v-for="(item,index) in list" :key="index">
                  <div class="close" @click="close(index)"></div>
                  <img :src="item" />
                </div>
                <div class="add" v-show="maxStatus" @click="chooseType">
                  <div class="add-image"> </div>
                </div>
            </div>
           </div>
           <input id="upload_file" type="file" capture="camera" class="file-input" accept="image/png,image/jpeg,image/jpg" :multiple="multiple" @change="inputChange" style="display: none" />
          </div>
        </div>
          <div style="font-size: 14px;width:95%;height: 50px;">
            <button style="float: left;border:none;height: 35px;width: 45%;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 5px;background-color: red;color:#fff">确认收货</button>
            <button style="float: right;border:none;height: 35px;width: 45%;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 5px;background-color: red;color:#fff">拒收</button>
          </div>
      </van-row>
      </div>
    </div>
</template>
<script>
import { updatefile } from 'updatefile'
export default {
  data(){
    return {
      type:1,
      maxStatus: true
    }
  },
  props: {
    multiple: Boolean,
    max: Number,
    list: Array
  },
  mounted(){
    this.$store.commit('changeParame', {headerBack:true,hederContent:'运单详情',bottom:'1',bottomShow:false})
  },
  methods:{
    getLoadIng(type){
      if(type==1){
          this.type=1;
      }else if(type==2){
          this.type=2;
      }else{
          this.type=3;
      }
    },
    chooseType() {
      document.getElementById("upload_file").click();
    },
    close(index) {
      this.list.splice(index, 1);
      this.maxStatus = this.list == this.max ? false : true;
    },
    async inputChange(e) {
      let files = e.target.files;
      let len = this.list.length + files.length;
      if (len > this.max) {
        document.getElementById("upload_file").value = "";
        this.$ui.toast(`最多允许上传${this.max}张`);
        return;
      }
       
      let uploadAll = [].slice.call(files ,0).map(this.upload);
      //使用object.values(files)，测试安卓存在兼容性问题，替换为[].slice.call(files ,0)
       
      this.$ui.loading.open({//上传中效果，可自行替换。
        text: "上传中...",
        spinnerType: "fading-circle"
      });
      let result = await Promise.all(uploadAll);
      document.getElementById("upload_file").value = "";
      this.$ui.loading.close();
    },
    upload(file, index) {
      return new Promise(async (resolve, reject) => {
          let form = new FormData();
        form.append("file", file);
        form.append("***");//根据上传入参添加参数
        let result = await this.post("/file/upload-file", form);
        if (result.cd != 0) {//失败处理
          this.$ui.toast(`第${index + 1}张(${file.name})上传出错(已忽略)`);
          resolve(result);
          return;
        }
        this.list.push(result.data.url);
        if (this.list.length == this.max) {
          this.maxStatus = false;
        }
        resolve(result);
        
      });
    }
  }
}
</script>
<style lang="less" scoped>
  .ewm{
  position: fixed;
  right: 4%;
  top: 12px;
  width: 1.5rem;
}
.black{
  color:#333;
}
.blue{
  color:rgb(30, 131, 255)
}
fileCon {
  width: 100%;
  min-height: 76px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .list {
    width: 100%;
    min-height: 76px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    & > div {
      width: 50px;
      height: 50px;
      margin: 10px 10px 10px 0;
      position: relative;
      background: #ccc;
      & > img {
        width: 100%;
        height: 100%;
      }
      .close {
        width: 15px;
        height: 15px;
        background-image: url(../../assets/images/icon_close.png);
        background-size: 100%;
        position: absolute;
        top: -7px;
        right: -7px;
      }
    }
  }
}
.add-image {
  width: 50px;
  height: 50px;
  background-image: url(../../assets/images/addImg.png);
  background-size: 100%;
}
</style>