<template>
<ErrorHeader :headerName="`ERROR`"/>

  <!-- Page body
                ============================================================ -->
  <div id="page-body" class="page-body">
    <!-- row -->
    <div class="row main-row justify-content-center">
      <!-- Content area
                        ==================================================== -->
      <div id="primary" class="content-area col-lg-12">
        <!-- Main -->
        <main id="main" class="content-area-container site-main">
          <!-- Section -->
          <div class="main-section">
            <!-- container -->
            <div class="container gx-4">
              <!-- row -->
              <div class="row gx-36 justify-content-center">
                <!-- col-xl-5 -->
                <div class="col-xl-5 col-lg-6 col-md-8">
                  <!-- Section title -->
                  <div class="section-title text-center">
                    <!-- Section title container -->
                    <div class="section-title-container">
                      <!-- Section title body -->
                      <div class="section-title-body">
                        <!-- Block content -->
                        <div class="section-title-content">
                          <h4>요청하신 페이지를 찾을 수 없습니다.</h4>

                          <h2 class="custom-number">
                            <span>4</span>
                            <span>0</span>
                            <span>4</span>
                          </h2>

                          <p>
                            정보를 다시 한 번 확인해주세요.
                          </p>
                        </div>
                        <!-- /End Block content -->
                      </div>
                      <!--/End Section title body -->
                    </div>
                    <!-- /End Section title container -->
                  </div>
                  <!-- /End Section title -->

                  <!-- Text block -->
                  <div class="main-block text-block text-center">
                    <!-- Block container -->
                    <div class="main-block-container text-block-container">
                      <!-- Block body -->
                      <div class="main-block-body text-block-body">
                        <!-- Block content -->
                        <div class="main-block-content text-block-content">
                          <a href="/" class="btn btn-accent">BACK TO HOME</a>
                        </div>
                        <!-- /End Block content -->
                      </div>
                      <!--/End Block body -->
                    </div>
                    <!-- /End Block container -->
                  </div>
                  <!-- /End Text block -->
                </div>
                <!-- /End col-xl-5 -->
              </div>
              <!-- /End row -->
            </div>
            <!-- /End container -->
          </div>
          <!-- /End Section -->
        </main>
        <!-- /End Main -->
      </div>
      <!-- /End Content area -->
    </div>
    <!-- /End row -->
  </div>
  <!-- /End Page body -->
</template>

<script>
import ErrorHeader from '@/components/promotion/promotion-header.vue';
export default {
    components: {
        ErrorHeader,
    }
};
</script>

<style>
</style>