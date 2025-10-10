import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import BannerSecond from "@/components/BannerSecond.vue";
import Reviews from "@/components/Reviews.vue";
import Location from "@/components/Location.vue";
import Footer from "@/components/Footer.vue";

export default {
      title: "Pages/About",
};

export const Default = () => ({
      components: { Header, BannerSecond, Reviews, Location, Footer, About },
      template: `
      <div>
            <Header />
            <About />
            <section>
                <BannerSecond />
            </section>
            <Reviews />
            <Location />
            <Footer />
      </div>
      `,
});
