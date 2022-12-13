<template>
  <!-- Page body
                ============================================================ -->
  <div id="page-body" class="page-body">
    <!-- container -->
    <div class="container gx-4">
      <!-- row -->
      <div class="row main-row justify-content-center">
        <!-- Content area
                            ================================================ -->
        <div id="primary" class="content-area col-lg-12">
          <!-- Main -->
          <main id="main" class="content-area-container site-main pt-72 pb-72">
            <!-- Shop wrapper -->
            <div class="shop-block-wrapper">
              <!-- row -->
              <div class="row gx-36">
                <!-- Grid item -->
                <div class="shop-block-post col-lg-12">
                  <!-- Post -->
                  <article
                    class="
                      main-block
                      shop-block shop-block-inner shop-block-inner-sbs
                    "
                  >
                    <!-- Block container -->
                    <div
                      class="
                        main-block-container
                        shop-block-container shop-block-inner-container
                      "
                    >
                      <!-- row -->
                      <div class="row gx-36" id="sticky-sidebar-wrapper">
                        <!-- col-lg-5 -->
                        <div class="col-lg-5 col-md-6">
                          <!-- Block header -->
                          <div
                            class="
                              main-block-header
                              shop-block-header
                              shop-block-inner-header
                              shop-block-inner-sbs-header
                            "
                          >
                            <!-- Sale -->
                            <!-- <span class="ribbon left-top">
                              <span
                                class="
                                  ribbon-text
                                  h6
                                  white-color-bg
                                  heading-color
                                "
                                >SALE!</span
                              >
                            </span> -->

                            <!-- Slider block -->
                            <div
                              class="owl-slider owl-carousel"
                              data-owl-slider-items-xl="1"
                              data-owl-slider-items-lg="1"
                              data-owl-slider-items-md="1"
                              data-owl-slider-items-sm="1"
                              data-owl-slider-items-xs="1"
                              data-owl-slider-items-margin="0"
                              data-owl-slider-loop="no"
                              data-owl-slider-arrows="no"
                              data-owl-slider-arrows-layout="layout-2"
                              data-owl-slider-autoplay="no"
                              data-page-direction="ltr"
                              data-owl-slider-thumbnail="no"
                            >
                              

                              <!-- Slider item -->
                              <div class="owl-slider-item">
                                <!-- Image block -->
                                <div class="main-block image-block">
                                  <!-- Block container -->
                                  <div
                                    class="
                                      main-block-container
                                      image-block-container
                                    "
                                  >
                                    <!-- Block header -->
                                    <div
                                      class="
                                        main-block-header
                                        image-block-header
                                      "
                                    >
                                      <a
                                        href="assets/images/shop/013.jpg"
                                        data-lightbox="gallery-1"
                                        data-lightbox-caption="Elegant handbag"
                                      >
                                        <img
                                          src="assets/images/comoyoon/flower/flower-1.jpg"
                                          alt="Image"
                                        />
                                      </a>
                                    </div>
                                    <!-- /End Block header -->
                                  </div>
                                  <!-- /End Block container -->
                                </div>
                                <!-- /End Image block -->
                              </div>
                              <!-- /End Slider item -->
                            </div>
                            <!-- /End Slider block -->


                          </div>
                          <!-- /End Block header -->
                        </div>
                        <!-- /End col-lg-5 -->

                        <!-- col-lg-7 -->
                        <div class="col-lg-7 col-md-6">
                          <!-- Block body -->
                          <div
                            class="
                              main-block-body
                              shop-block-body
                              shop-block-inner-body
                              shop-block-inner-sbs-body
                            "
                          >
                            <!-- Block heading -->
                            <div
                              class="
                                main-block-heading
                                shop-block-heading shop-block-inner-heading
                              "
                            >
                              <h2>
                                <a href="#" title="Add to wishlist"
                                  ><i class="far fa-heart"></i
                                ></a>
                                원형2단 플라워박스
                              </h2>
                            </div>
                            <!-- /End Block heading -->

                            <!-- Block content -->
                            <div
                              class="
                                main-block-content
                                shop-block-content shop-block-inner-content
                              "
                            >
                              <!-- Rating -->
                              <!-- <div class="product-rating">
                                <div class="rate rate-5"></div>
                                <a href="#reviews"
                                  >(<span>3</span> customer reviews)</a
                                >
                              </div> -->

                              <!-- Price -->
                              <h4 class="product-price">
                                <span class="price">
                                  <del class="body-color">
                                    <span class="amount">
                                      <span class="currencySymbol">KRW</span
                                      >35000
                                    </span>
                                  </del>
                                  <ins>
                                    <span class="amount">
                                      <span class="currencySymbol">KRW</span
                                      >40000
                                    </span>
                                  </ins>
                                </span>
                              </h4>
                              <!-- /End Price -->

                              <!-- Short description -->
                              <p class="product-description">
                                꽃 설명 입니다. 꽃 설명 입니다. 꽃 설명 입니다.
                                꽃 설명 입니다. 꽃 설명 입니다. 꽃 설명 입니다.
                                꽃 설명 입니다. 꽃 설명 입니다. 꽃 설명 입니다.
                              </p>

                              <!-- Add to cart -->
                              <form
                                class="product-add-to-cart"
                                method="post"
                                action="#"
                              >
                                <button
                                  type="button"
                                  name="add-to-cart"
                                  class="btn btn-dark"
                                >
                                  <span>RESERVATION</span>
                                </button>
                              </form>
                              <!-- /End Add to cart -->

                              <!-- info -->
                              <div class="info">
                                <ul
                                  class="
                                    post-info-block post-info-block-layout-2
                                  "
                                >
                                  <li>
                                    <b>상품 번호:</b><span>{{ flowerId }}</span>
                                  </li>

                                  <li>
                                    <b>For:</b
                                    ><span
                                      ><a>선물</a>, <a>축하</a>,
                                      <a>감사</a></span
                                    >
                                  </li>

                                  <li>
                                    <b>Color:</b
                                    ><span
                                      ><a>보라</a>, <a>연두</a>,
                                      <a>노랑</a></span
                                    >
                                  </li>
                                </ul>
                              </div>
                              <!-- /End info -->
                            </div>
                            <!-- /End Block content -->
                          </div>
                          <!--/End Block body -->
                        </div>
                        <!-- /End col-lg-7 -->
                      </div>
                      <!-- /End row -->

                      <!-- row -->
                      <div class="row gx-36">
                        <!-- col-lg-12 -->
                        <div class="col-lg-12">
                          <!-- Block body -->
                          <div
                            class="
                              main-block-body
                              shop-block-body shop-block-inner-body
                            "
                          >
                            <!-- Block content -->
                            <div
                              class="
                                main-block-content
                                shop-block-content shop-block-inner-content
                              "
                            >
                              <!-- Tabs -->
                              <div
                                class="main-block tabs-block tabs-block-select"
                              >
                                <!-- Nav -->
                                <nav>
                                  <!-- Nav tabs -->
                                  <div
                                    class="nav nav-tabs text-center"
                                    role="tablist"
                                  >
                                    <button
                                      class="nav-link active"
                                      data-bs-toggle="tab"
                                      data-bs-target="#description"
                                      aria-selected="true"
                                      type="button"
                                      role="tab"
                                    >
                                      Description
                                    </button>

                                    <button
                                      class="nav-link"
                                      data-bs-toggle="tab"
                                      data-bs-target="#specifications"
                                      aria-selected="false"
                                      type="button"
                                      role="tab"
                                    >
                                      Specifications
                                    </button>

                                    
                                  </div>
                                  <!-- /End Nav tabs -->
                                </nav>
                                <!-- /End Nav -->

                                <!-- Content -->
                                <div class="tab-content">
                                  <!-- Content 1 -->
                                  <div
                                    class="tab-pane fade show active"
                                    id="description"
                                  >
                                    <h6 class="tabs-block-main-title">
                                      Product description
                                    </h6>

                                    <p>
                                      Cum sociis natoque penatibus et magnis dis
                                      parturient montes, nascetur ridiculus mus.
                                      Phasellus molestie imperdiet condimentum.
                                      Nulla tincidunt elementum nunc sed
                                      ullamcorper. Mauris pharetra mauris leo,
                                      non tincidunt augue dignissim et. Maecenas
                                      pharetra enim at sollicitudin posuere.
                                      Maecenas elementum quam erat, laoreet
                                      iaculis metus aliquam sed. Phasellus eu
                                      odio et mauris dapibus tincidunt nec id
                                      ligula. Sed in est leo. Nulla facilisi.
                                    </p>

                                    <p>
                                      In neque enim, congue ac mattis sed,
                                      ultricies pretium leo. Fusce sollicitudin,
                                      nulla lobortis interdum tincidunt, purus
                                      nunc semper risus, vitae scelerisque orci
                                      lectus id velit. Integer quis neque et
                                      tortor fermentum ultricies. Sed laoreet
                                      ipsum neque, id dignissim dolor tempus ut.
                                      Nulla tincidunt semper quam. Ut a ante sit
                                      amet felis vehicula mollis. Nullam at
                                      fermentum ipsum, ac vehicula urna. Duis
                                      nulla nisi, consequat eget lectus eu,
                                      accumsan auctor quam. Aliquam viverra
                                      facilisis leo, non aliquet lacus laoreet
                                      vel. Integer aliquet consectetur mi vel
                                      lobortis.
                                    </p>
                                  </div>
                                  <!-- /End Content 1 -->

                                  <!-- Content 2 -->
                                  <div
                                    class="tab-pane fade"
                                    id="specifications"
                                  >
                                    <h6 class="tabs-block-main-title">
                                      Product specifications
                                    </h6>

                                    <div class="table-responsive">
                                      <table
                                        class="
                                          table
                                          table-bordered
                                          table-bordered-layout-2
                                        "
                                      >
                                        <tbody>
                                          <tr>
                                            <th>Model</th>
                                            <td>Handbag</td>
                                          </tr>
                                          <tr>
                                            <th>Color</th>
                                            <td>Black</td>
                                          </tr>
                                          <tr>
                                            <th>Main Material</th>
                                            <td>Leather</td>
                                          </tr>
                                          <tr>
                                            <th>Warranty</th>
                                            <td>1 Year</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <!-- /End Content 2 -->

                                  
                                </div>
                                <!-- /End Content -->
                              </div>
                              <!-- /End Tabs -->
                            </div>
                            <!-- /End Block content -->
                          </div>
                          <!--/End Block body -->
                        </div>
                        <!-- /End col-lg-12 -->
                      </div>
                      <!-- /End row -->
                    </div>
                    <!-- /End Block container -->
                  </article>
                  <!-- /End Post -->
                </div>
                <!-- /End Grid item -->
              </div>
              <!-- /End row -->
            </div>
            <!-- /End Shop wrapper -->
          </main>
          <!-- /End Main -->
        </div>
        <!-- /End Content area -->
      </div>
      <!-- /End row -->
    </div>
    <!-- /End container -->
  </div>
  <!-- /End Page body -->


</template>

<script>
export default {
  props: {
    flowerId: {
      type: String,
    },
  },
};
</script>

<style>
</style>