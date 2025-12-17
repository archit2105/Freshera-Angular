import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef  } from '@angular/core';
declare var bootstrap: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
 
  
    @ViewChildren('counter') counters: QueryList<ElementRef>;
  countersArray = [3];

  ngAfterViewInit() {
    // Initialize counters
    this.counters.forEach(counter => {
      const endValue = parseInt(counter.nativeElement.getAttribute('data-to'), 10);
      this.animateCounter(counter.nativeElement, 0, endValue, 2000);
    });

    // Initialize carousel
    const multipleCardCarousel = document.querySelector("#carouselExampleControls");

    if (window.matchMedia("(min-width: 576px)").matches) {
      const carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: 3000
      });
      const carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
      const cardWidth = document.querySelector(".carousel-item").clientWidth;
      let scrollPosition = 0;

      document.querySelector(".carousel-control-next").addEventListener("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 3) {
          scrollPosition += cardWidth;
          document.querySelector(".carousel-inner").scrollLeft = scrollPosition;
        }
      });

      document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          document.querySelector(".carousel-inner").scrollLeft = scrollPosition;
        }
      });
    } else {
      multipleCardCarousel.classList.add("slide");
    }
  }

  animateCounter(element: HTMLElement, start: number, end: number, duration: number) {
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const increment = end > start ? 1 : -1;

    const timer = setInterval(() => {
      current += increment;
      element.innerText = current.toString();
      if (current === end) {
        clearInterval(timer);
        // Restart the counter
        setTimeout(() => {
          this.animateCounter(element, start, end, duration);
        }, 3000); // Adjust the delay as needed
      }
    }, stepTime);
  }
  fullText: string = `Migrating to Freshera's cloud-based infrastructure was transformative. The process was expertly managed with minimal disruption and excellent updates. Post-migration support has been outstanding, improving performance, reliability, and cost efficiency. The cloud environment is more scalable and secure, making it a great investment. Highly recommend Freshera’s services.`;
  truncatedText: string = this.fullText.substring(0, 400); // Adjust the number to control the length of the truncated text
  isExpanded: boolean = false;
  fullText2: string=`Our company recently migrated servers to a new cloud provider with the help of Freshera. The team demonstrated professionalism and efficiency, understanding your specific needs and challenges. They provided a comprehensive migration strategy covering data transfer, application compatibility, security, and minimizing downtime. The migration was executed with minimal disruption, keeping critical systems online and mitigating risks through careful planning.Freshera optimized your infrastructure on the new platform, enhancing performance and cost-efficiency. The post-migration phase was smooth, with excellent support for minor issues. You observed improvements in speed, scalability, and cost management. Overall, the migration was highly successful, and you highly recommend Freshera for similar transitions.`
  truncatedText2: string = this.fullText2.substring(0, 400);
  fullText3: string=`Our company transitioned to a DevOps platform using Kubernetes with the help of Freshera. The team provided a thorough consultation, explaining the benefits of Kubernetes for scalability, resilience, and automation. They tailored the deployment strategy to your needs, ensuring a seamless setup. Kubernetes allowed for consistent application deployment and efficient load handling through automated scaling.The integration with your existing DevOps practices, including CI/CD pipelines, significantly improved development cycles. The support from Freshera was excellent, with quick responses and valuable insights. Post-migration, your website's performance and reliability improved, and operational costs reduced due to efficient resource use and automation. Overall, hosting on Kubernetes has been transformative, and you highly recommend Freshera for modernizing infrastructure.`
  truncatedText3: string = this.fullText2.substring(0, 400);
  toggleText(event: Event) {
    event.preventDefault(); // Prevents the default anchor tag behavior
    this.isExpanded = !this.isExpanded;
    this.truncatedText = this.isExpanded ? this.fullText : this.fullText.substring(0, 100);
  }
  toggleText2(event: Event) {
    event.preventDefault(); // Prevents the default anchor tag behavior
    this.isExpanded = !this.isExpanded;
    this.truncatedText2 = this.isExpanded ? this.fullText2 : this.fullText2.substring(0, 300);
  }
  toggleText3(event: Event) {
    event.preventDefault(); // Prevents the default anchor tag behavior
    this.isExpanded = !this.isExpanded;
    this.truncatedText3 = this.isExpanded ? this.fullText3 : this.fullText3.substring(0, 300);
  }

}