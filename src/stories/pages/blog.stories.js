import Header from "@/components/Header.vue";
import BannerSecond from "@/components/BannerSecond.vue";
import Reviews from "@/components/Reviews.vue";
import Location from "@/components/Location.vue";
import Footer from "@/components/Footer.vue";
import Articles from "@/components/Articles.vue";

export default {
      title: "Pages/Blog",
};

export const Default = () => ({
      components: { Header, BannerSecond, Reviews, Location, Footer, Articles },
      template: `
      <div>
            <Header />
            <Articles :showBreadCrumb="true"/>
            <section>
                <BannerSecond />
            </section>
            <Reviews />
            <Location />
            <Footer />
      </div>
      `,
});
