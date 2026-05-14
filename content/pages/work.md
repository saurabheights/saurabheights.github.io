Title: My Work
Save_as: mywork.html
URL: mywork

<section class="hero work-hero" aria-labelledby="work-hero-title">
  <div class="hero__inner">
    <div class="hero__content">
      <h1 id="work-hero-title" class="hero__title">Selected <em>work,</em><br>2018-present.</h1>
    </div>
    <div class="work-hero__aside">
      <p class="hero__subtitle">A working archive of projects in computer vision, 3D perception, and the infrastructure that keeps them honest.</p>
      <p class="work-hero__count"><span class="visible-project-count">11</span> projects · <span class="total-project-count">11</span> total</p>
    </div>
  </div>
</section>

<section class="portfolio-section work-archive">
  <div class="category-filters">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="computer-vision">Computer Vision</button>
    <button class="filter-btn" data-filter="deep-learning">Deep Learning</button>
    <button class="filter-btn" data-filter="data-engineering">Data Engineering</button>
    <button class="filter-btn" data-filter="3d-vision">3D Vision</button>
    <button class="filter-btn" data-filter="software-engineering">Software Engineering</button>
  </div>

  <div class="projects-grid">
    <article class="project-card-new" data-category="computer-vision 3d-vision software-engineering deep-learning" data-priority="5" data-date="2025-12-16">
      <div class="project-card-new__body">
        <div class="project-card-new__main">
          <h3 class="project-card-new__title"><em>Tracking</em> - Multi-Camera Multi-Person Tracking</h3>
          <p class="project-card-new__description">Real-time multi-camera person tracking for customer behavior analysis and site security, with re-identification across non-overlapping views. Pose triangulation and appearance embeddings raised inter-camera mAP from 40% to 74% on an open-set benchmark.</p>
          <div class="project-card-new__badges">
            <span class="badge">Computer Vision</span>
            <span class="badge">3D Vision</span>
            <span class="badge">Deep Learning</span>
          </div>
        </div>
        <div class="project-card-new__meta">
          <div><b>2025</b></div>
          <div>Tech Lead</div>
          <div>PyTorch · Docker</div>
        </div>
      </div>
    </article>

    <article class="project-card-new" data-category="computer-vision software-engineering" data-priority="4" data-date="">
      <div class="project-card-new__body">
        <div class="project-card-new__main">
          <h3 class="project-card-new__title"><em>VMS</em> - Live-Camera Anonymization Software</h3>
          <p class="project-card-new__description">Low-latency face and license-plate anonymization for RTSP streams, integrated directly into Milestone VMS through the AI Bridge. Shared decoders and batching improved load balancing and kept GPU utilization high under concurrent camera load.</p>
          <div class="project-card-new__badges">
            <span class="badge">Computer Vision</span>
            <span class="badge">Software Engineering</span>
          </div>
        </div>
        <div class="project-card-new__meta">
          <div><b>2024</b></div>
          <div>Engineer</div>
          <div>C++ · FastAPI · PyTorch</div>
        </div>
      </div>
    </article>

    <article class="project-card-new" data-category="computer-vision 3d-vision" data-priority="3" data-date="">
      <div class="project-card-new__body">
        <div class="project-card-new__main">
          <h3 class="project-card-new__title"><em>Cargo</em> - Volume Measurement</h3>
          <p class="project-card-new__description">A real-time 3D reconstruction and contour-fitting pipeline using depth cameras and Open3D. Built as a multi-process pipe-and-filter system for airline cargo measurement at operational speeds.</p>
          <div class="project-card-new__badges">
            <span class="badge">3D Vision</span>
            <span class="badge">Computer Vision</span>
          </div>
        </div>
        <div class="project-card-new__meta">
          <div><b>2023</b></div>
          <div>Lead</div>
          <div>C++ · Python · Docker · Qt</div>
        </div>
      </div>
    </article>

    <article class="project-card-new" data-category="data-engineering" data-priority="2" data-date="">
      <div class="project-card-new__body">
        <div class="project-card-new__main">
          <h3 class="project-card-new__title"><em>Data</em> - Geo-Data Management Tool</h3>
          <p class="project-card-new__description">A PostgreSQL and PostGIS platform for curated dataset storage, geographic querying, and sampling. Included a Django backend, Celery workers for heavy compute jobs, and a client library for dataset access.</p>
          <div class="project-card-new__badges">
            <span class="badge">Data Engineering</span>
          </div>
        </div>
        <div class="project-card-new__meta">
          <div><b>2023</b></div>
          <div>Engineer</div>
          <div>Django · PostgreSQL · Python</div>
        </div>
      </div>
    </article>

    <article class="project-card-new" data-category="deep-learning software-engineering" data-priority="1" data-date="">
      <div class="project-card-new__body">
        <div class="project-card-new__main">
          <h3 class="project-card-new__title"><em>Safety</em> - Model Robustness Tests for AVs</h3>
          <p class="project-card-new__description">Kubernetes-based model serving, benchmarking, and safety evaluation for autonomous vehicle ML products. Added new safety performance indicators and benchmark workflows for real and synthetically perturbed data.</p>
          <div class="project-card-new__badges">
            <span class="badge">Deep Learning</span>
            <span class="badge">Software Engineering</span>
          </div>
        </div>
        <div class="project-card-new__meta">
          <div><b>2022</b></div>
          <div>Engineer</div>
          <div>Go · Kubernetes · PyTorch</div>
        </div>
      </div>
    </article>

    <article class="project-card-new" data-category="deep-learning computer-vision software-engineering" data-priority="0" data-date="">
      <div class="project-card-new__body">
        <div class="project-card-new__main">
          <h3 class="project-card-new__title"><em>Pipeline</em> - Multi-Task Deep Learning</h3>
          <p class="project-card-new__description">A single training framework for classification, detection, and segmentation. Reworked CPU-heavy metrics with multiprocessing and Cython, pushing overall GPU utilization above 90% in training and inference.</p>
          <div class="project-card-new__badges">
            <span class="badge">Deep Learning</span>
            <span class="badge">Computer Vision</span>
            <span class="badge">Software Engineering</span>
          </div>
        </div>
        <div class="project-card-new__meta">
          <div><b>2021</b></div>
          <div>Engineer</div>
          <div>Python · TensorFlow · Docker</div>
        </div>
      </div>
    </article>

    <article class="project-card-new" data-category="computer-vision software-engineering" data-priority="0" data-date="">
      <div class="project-card-new__body">
        <div class="project-card-new__main">
          <h3 class="project-card-new__title"><em>Media</em> - Processing Service at Roposo</h3>
          <p class="project-card-new__description">A media-processing service for compression, metadata analysis, and beautification. Optimizations cut infrastructure cost by 70 percent while enabling plagiarism analysis and adaptive SSIM-based compression.</p>
          <div class="project-card-new__badges">
            <span class="badge">Computer Vision</span>
            <span class="badge">Software Engineering</span>
          </div>
        </div>
        <div class="project-card-new__meta">
          <div><b>2020</b></div>
          <div>Engineer</div>
          <div>Java · OpenCV · AWS</div>
        </div>
      </div>
    </article>

    <article class="project-card-new" data-category="software-engineering" data-priority="0" data-date="">
      <div class="project-card-new__body">
        <div class="project-card-new__main">
          <h3 class="project-card-new__title"><em>Resell</em> - Product Form at Amazon</h3>
          <p class="project-card-new__description">A high-performance DynamoDB-backed product form workflow that reduced payload size by 99.5 percent and improved form completion rate by 5x on mobile-heavy usage.</p>
          <div class="project-card-new__badges">
            <span class="badge">Software Engineering</span>
          </div>
        </div>
        <div class="project-card-new__meta">
          <div><b>2019</b></div>
          <div>Engineer</div>
          <div>Java · DynamoDB</div>
        </div>
      </div>
    </article>

    <article class="project-card-new" data-category="data-engineering" data-priority="0" data-date="">
      <div class="project-card-new__body">
        <div class="project-card-new__main">
          <h3 class="project-card-new__title"><em>Catalog</em> - Labeling Quality Platform</h3>
          <p class="project-card-new__description">A clustering-based quality platform for catalog labeling review with human-in-the-loop analysis. Reduced catalog quality checks from weeks to under an hour.</p>
          <div class="project-card-new__badges">
            <span class="badge">Data Engineering</span>
            <span class="badge">Machine Learning</span>
          </div>
        </div>
        <div class="project-card-new__meta">
          <div><b>2019</b></div>
          <div>Engineer</div>
          <div>Python · Spark</div>
        </div>
      </div>
    </article>

    <article class="project-card-new" data-category="computer-vision" data-priority="4" data-date="2025-12-15">
      <div class="project-card-new__body">
        <div class="project-card-new__main">
          <h3 class="project-card-new__title"><em>Turbulence</em> - Removal Module</h3>
          <p class="project-card-new__description">A non-rigid registration-based atmospheric turbulence removal module for long-range imagery. CUDA and pipe-and-filter optimizations delivered a 240x speedup and made the system usable in real time.</p>
          <div class="project-card-new__badges">
            <span class="badge">Computer Vision</span>
          </div>
        </div>
        <div class="project-card-new__meta">
          <div><b>2022</b></div>
          <div>Engineer</div>
          <div>C++ · OpenCV · Qt</div>
        </div>
      </div>
    </article>

    <article class="project-card-new" data-category="computer-vision software-engineering" data-priority="0" data-date="">
      <div class="project-card-new__body">
        <div class="project-card-new__main">
          <h3 class="project-card-new__title"><em>Wide Area</em> - Tracking Module</h3>
          <p class="project-card-new__description">A wide-area tracking system with PTZ control, multi-camera stitching, and change detection for CCD and infrared camera setups in real-time operational environments.</p>
          <div class="project-card-new__badges">
            <span class="badge">Computer Vision</span>
            <span class="badge">Software Engineering</span>
          </div>
        </div>
        <div class="project-card-new__meta">
          <div><b>2018</b></div>
          <div>Engineer</div>
          <div>C++ · OpenCV · Qt</div>
        </div>
      </div>
    </article>
  </div>
</section>

<script>
  function getCardCategories(card) {
    const raw = card.dataset.category || "";
    return raw.split(/[\s,]+/).map(c => c.trim().toLowerCase());
  }

  function getCardPriority(card) {
    return parseInt(card.dataset.priority || "0", 10);
  }

  function getCardDate(card) {
    const rawDate = card.dataset.date;
    return rawDate ? new Date(rawDate) : new Date(0);
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = Array.from(document.querySelectorAll(".project-card-new"));
  const projectsGrid = document.querySelector(".projects-grid");
  const visibleProjectCount = document.querySelector(".visible-project-count");
  const totalProjectCount = document.querySelector(".total-project-count");

  if (totalProjectCount) {
    totalProjectCount.textContent = String(projectCards.length);
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filterValue = button.dataset.filter.toLowerCase();
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const visibleCards = projectCards.filter(card => {
        const categories = getCardCategories(card);
        return filterValue === "all" || categories.includes(filterValue);
      });

      visibleCards.sort((a, b) => {
        const priorityDiff = getCardPriority(b) - getCardPriority(a);
        if (priorityDiff !== 0) {
          return priorityDiff;
        }
        return getCardDate(b) - getCardDate(a);
      });

      projectCards.forEach(card => card.setAttribute("data-hidden", "true"));
      visibleCards.forEach(card => {
        card.setAttribute("data-hidden", "false");
        projectsGrid.appendChild(card);
      });

      if (visibleProjectCount) {
        visibleProjectCount.textContent = String(visibleCards.length);
      }
    });
  });

  projectCards.forEach(card => card.setAttribute("data-hidden", "false"));
  document.querySelector('.filter-btn[data-filter="all"]')?.click();
</script>
