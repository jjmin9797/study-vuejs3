<template>
  <!-- Page body
                ============================================================ -->
  <div id="page-body" class="page-body">
    <!-- row -->
    <div class="row main-row justify-content-center">
      <div id="primary" class="content-area col-lg-12">
        <!-- Main -->
        <main id="main" class="content-area-container site-main">
          <!-- Section -->
          <div class="main-section">
            <!-- container -->
            <div class="container gx-4">
              <!-- row -->
              <div class="row gx-36">
                <!-- col-lg-8 -->
                <div class="col-lg-8 offset-lg-2">
                  <!-- Section title -->
                  <div class="section-title text-center">
                    <!-- Section title container -->
                    <div class="section-title-container">
                      <!-- Section title body -->
                      <div class="section-title-body">
                        <!-- Section title heading -->
                        <div class="section-title-heading">
                          <h2>Reservation</h2>
                        </div>
                        <!-- /End Section title heading -->
                      </div>
                    </div>
                  </div>
                  <div class="gap gap-36"></div>
                </div>
                <!-- col-lg-8 -->
                <div class="col-lg-8 offset-lg-2">
                  <!-- Contact form -->
                  <div
                    class="form-block form-block-validation form-block-contact"
                  >
                    <!-- Form container -->
                    <div class="form-block-container">
                      <!-- Form -->
                      <form
                        method="post"
                        action="assets/php/contact/contact.php"
                        class="row"
                      >
                        <!-- Name -->
                        <div class="col-md-6">
                          <label class="label">
                            예약자 성함 <span class="red-color">*</span>
                            <input
                              class="form-control"
                              type="text"
                              name="form_name"
                            />
                          </label>
                        </div>
                        <!-- /End Name -->

                        <!-- Email address -->
                        <div class="col-md-6">
                          <label class="label">
                            핸드폰 번호 <span class="red-color">*</span>
                            <input
                              class="form-control"
                              type="text"
                              
                            />
                          </label>
                        </div>
                        <!-- /End Email address -->

                        <!-- Subject -->
                        <div class="col-lg-12">
                          <label class="label">
                            상품명 <span class="red-color">*</span>
                            <input
                              class="form-control"
                              type="text"
                              name="form_subject"
                            />
                          </label>
                        </div>
                        <!-- /End Subject -->

                        <!-- Subject -->
                        <div class="col-lg-6">
                          <label class="label">
                            픽업 날짜 <span class="red-color">*</span>
                            <input
                              class="form-control"
                              type="date"
                              
                            />
                          </label>
                        </div>
                        <!-- /End Subject -->

                        <!-- Subject -->
                        <div class="col-lg-6">
                          <label class="label">
                            픽업 시간 <span class="red-color">*</span>
                            <input
                              class="form-control"
                              type="time"
                              
                            />
                          </label>
                        </div>
                        <!-- /End Subject -->

                        

                        <!-- Message -->
                        <div class="col-lg-12">
                          <label class="label">
                            요구 사항 
                            <textarea
                              class="form-control"
                              rows="6"
                            ></textarea>
                          </label>
                        </div>
                        <!-- /End Message -->

                        <!-- Terms -->
                        <div class="col-lg-12">
                          <label class="label input-type-checkbox">
                            <input
                              class="form-control form-check-must-accept"
                              type="checkbox"
                              name="form_terms"
                            />
                            I have read and agree to COMOYOON
                            <a href="#" title="terms and conditions"
                              >terms and conditions</a
                            >.
                          </label>
                        </div>
                        <!-- /End Terms -->

                        

                        <!-- Submit button -->
                        <div class="col-lg-12">
                          <button
                            type="submit"
                            class="btn btn-accent btn-block"
                          >
                            <span>SEND</span>
                          </button>
                        </div>
                        <!-- /End Submit button -->
                      </form>
                      <!-- /End Form -->
                    </div>
                    <!-- /End Form container -->
                  </div>
                  <!-- /End Contact form -->
                </div>
                <!-- /End col-lg-8 -->
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>