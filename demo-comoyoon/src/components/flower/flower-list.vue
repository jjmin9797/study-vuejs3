<template>
  <div id="page-body" class="page-body">
    <!-- row -->
    <div class="row main-row justify-content-center">
      <div id="primary" class="content-area col-lg-12">
        <!-- Main -->
        <main id="main" class="content-area-container site-main">
          <!-- Section -->
          <div class="main-section pt-72 pb-72">
            <!-- container -->
            <div class="container gx-4">
              <!-- row -->
              <div class="row gx-36">
                <!-- col-lg-12 -->
                <div class="col-lg-12">
                  <!-- Shop wrapper -->
                  <div
                    class="shop-block-wrapper shop-block-grid shop-block-front"
                  >
                    <!-- Loop -->
                    <div
                      class="
                        row
                        gx-36
                        gy-36
                        row-cols-lg-3 row-cols-md-2 row-cols-sm-2
                        grid-wrapper
                        isotope-grid
                      "
                    >
                      <!-- 상품 넣기 -->
                      <!-- Grid item -->
                      <div class="grid-item isotope-item">
                        <!-- Post -->
                        <article class="main-block shop-block">
                          <!-- Block container -->
                          <div
                            class="main-block-container shop-block-container"
                          >
                            <!-- Block header -->
                            <div class="main-block-header shop-block-header">
                              <a @click="moveToFlowerDetail(1)">
                                <img
                                  src="assets/images/comoyoon/flower/flower-3.jpg"
                                  alt="Article image"
                                />
                              </a>
                            </div>
                            <!-- /End Block header -->

                            <!-- Block body -->
                            <div class="main-block-body shop-block-body">
                              <!-- Block heading -->
                              <div
                                class="main-block-heading shop-block-heading"
                              >
                                <h2 class="h5 title">
                                  <a @click="moveToFlowerDetail(1)">화병 센터피스</a>
                                </h2>

                                <h6 class="product-price">
                                  <span class="price">
                                    <span class="amount">
                                      <span class="currencySymbol">KRW </span
                                      >35000
                                    </span>
                                  </span>

                                  <a href="#" class="btn-add-to-cart">
                                    <span
                                      ><i class="fas fa-plus"></i>
                                      Reservation</span
                                    >
                                  </a>
                                </h6>
                              </div>
                              <!-- /End Block heading -->
                            </div>
                            <!--/End Block body -->
                          </div>
                          <!-- /End Block container -->
                        </article>
                        <!-- /End Post -->
                      </div>
                      <!-- /End Grid item -->

                      <!-- Grid item -->
                      <div class="grid-item isotope-item">
                        <!-- Post -->
                        <article class="main-block shop-block">
                          <!-- Block container -->
                          <div
                            class="main-block-container shop-block-container"
                          >
                            <!-- Block header -->
                            <div class="main-block-header shop-block-header">
                              <a @click="moveToFlowerDetail(2)">
                                <span class="ribbon left-top">
                                  <span
                                    class="
                                      ribbon-text
                                      h6
                                      white-color-bg
                                      heading-color
                                    "
                                    >HIT!</span
                                  >
                                </span>
                                <img
                                  src="assets/images/comoyoon/flower/flower-1.jpg"
                                  alt="Article image"
                                />
                              </a>
                            </div>
                            <!-- /End Block header -->

                            <!-- Block body -->
                            <div class="main-block-body shop-block-body">
                              <!-- Block heading -->
                              <div
                                class="main-block-heading shop-block-heading"
                              >
                                <h2 class="h5 title">
                                  <a @click="moveToFlowerDetail(2)">원형2단 플라워박스</a>
                                </h2>

                                <h6 class="product-price">
                                  <span class="price">
                                    <del class="body-color">
                                      <span class="amount">
                                        <span class="currencySymbol">KRW</span
                                        >40000
                                      </span>
                                    </del>
                                    <ins>
                                      <span class="amount">
                                        <span class="currencySymbol">KRW</span
                                        >35000
                                      </span>
                                    </ins>
                                  </span>

                                  <a href="#" class="btn-add-to-cart">
                                    <span
                                      ><i class="fas fa-plus"></i>Reservation</span
                                    >
                                  </a>
                                </h6>
                              </div>
                              <!-- /End Block heading -->
                            </div>
                            <!--/End Block body -->
                          </div>
                          <!-- /End Block container -->
                        </article>
                        <!-- /End Post -->
                      </div>
                      <!-- /End Grid item -->
                      <!--상품 넣기 끝 -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const moveToFlowerDetail = (flowerId) => {
            router.push("/flowerDetail?flowerId="+flowerId);
        };

        return {
            moveToFlowerDetail,
        }
    }
};
</script>

<style>
</style>