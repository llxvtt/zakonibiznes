import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Benefits from "@/components/Benefits.vue";
import Products from "@/components/Products.vue";
import ProductsSecond from "@/components/ProductsSecond.vue";
import ProductsThird from "@/components/ProductsThird.vue";
import Banner from "@/components/Banner.vue";
import Articles from "@/components/Articles.vue";
import Faq from "@/components/Faq.vue";
import BannerSecond from "@/components/BannerSecond.vue";
import Reviews from "@/components/Reviews.vue";
import Location from "@/components/Location.vue";
import Footer from "@/components/Footer.vue";

export default {
      title: "Pages/Home",
};

export const Default = () => ({
      components: { Header, Hero, Benefits, Products, ProductsSecond, ProductsThird, Banner, Articles, Faq, BannerSecond, Reviews, Location, Footer },
      template: `
      <div>
            <Header />
            <Hero />
            <Benefits />
            <Products />
            <ProductsSecond />
            <ProductsThird />
            <section>
                  <Banner />
            </section>
            <Articles />
            <Faq />
            <section>
            <BannerSecond />
            </section>
            <Reviews />
            <Location />
            <Footer />
      </div>
      `,
});
