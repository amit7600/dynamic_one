<template>
  <div>
    <div class="row main_container m-0">
      <LeftSideComponent />
      <div class="col-sm-10 right_side">
        <div class="inner_right_side">
          <div class="cover_img">
            <img src="images/inside_front.jpg" style="opacity: 0;" />
          </div>
          <div class="inner_right_side">
            <div class="cover_img inside_back_cover">
              <img src="images/inside_back.jpg" style="opacity: 0" />
            </div>
            <div class="inside_ifc inside_ibc">
              <div class="col-md-12 ibc_logo p-0">
                <img src="images/ibc_logo.png" alt title />
              </div>
              <div class="col-sm-12 p-0 inside_bc_img">
                <img src="images/ibc_img.jpg" alt title />
              </div>
              <div class="row below_title_text m-0">
                <div class="col-md-6">
                  <div class="col-sm-12">
                    <h2>
                      LIKE
                      <br />NO
                      <br />OTHER
                    </h2>
                  </div>
                </div>
                <div class="col-md-6">
                  <p class="right_content_text">
                    The sale of a significant home is truly noteworthy. To
                    represent a home of distinction requires highlyqualified real estate professionals with
                    global reach and local expertise.
                    <b>Sell your home with us.</b>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-8 pt-5 pl-5">
                  <div class="row">
                    <div class="col-md-3 p-0">
                      <img src="images/profile_pic.jpg" alt title />
                    </div>
                    <div class="col-md-9">
                      <div class="profile_text pl-3">
                        <h2>Kat Nitsou</h2>
                        <p>
                          <b>Sotheby’s International Realty, Inc.</b>
                        </p>
                        <p>16027 VENTURA BLVD, Suite 330</p>
                        <p>ENCINO, CA, 91436</p>
                        <p>O : 626-396-9400</p>
                        <p>M : 323-228-3805</p>
                        <p class="mb-3"></p>
                        <p>sothebyshomes.com</p>
                        <p>kat.nitsou@sothebyinternational.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ifcInputComponent />
    <ifcTextInputModel />
    <FileModalComponent />
  </div>
</template>
<script>
import ifcInputComponent from "./model/ifcModelInput";
import ifcTextInputModel from "./model/ifcTextInputModal";
import FileModalComponent from "./model/fileModalComponent";
import ColorPicker from "vue-iro-color-picker";
export default {
  components: {
    ifcInputComponent,
    ifcTextInputModel,
    FileModalComponent,
    "color-picker": ColorPicker
  }
};
</script>

<style>
</style>