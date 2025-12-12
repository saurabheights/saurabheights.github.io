Title: My Work
Save_as: mywork.html
URL: mywork

<section class="hero work-hero" aria-labelledby="work-hero-title">
  <div class="hero__inner">
    <div class="hero__content">
      <h1 id="work-hero-title" class="hero__title">My Work</h1>
      <p class="hero__subtitle">A collection of projects spanning computer vision, deep learning, and AI engineering.</p>
    </div>
  </div>
</section>

<!-- Portfolio Section -->
<section class="portfolio-section">
  <!-- Category Filters -->
  <div class="category-filters">
    <button class="filter-btn active" data-filter="all">All Projects</button>
    <button class="filter-btn" data-filter="computer-vision">Computer Vision</button>
    <button class="filter-btn" data-filter="deep-learning">Deep Learning</button>
    <button class="filter-btn" data-filter="data-engineering">Data Engineering</button>
    <button class="filter-btn" data-filter="3d-vision">3D Vision</button>
    <button class="filter-btn" data-filter="software-engineering">Software Engineering</button>
  </div>

  <!-- Projects Grid -->
  <div class="projects-grid">
  
  <!-- Project 1 -->
  <article class="project-card-new" data-category="computer-vision software-engineering">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
        <span class="badge">Scalable</span>
      </div>
      <h3 class="project-card-new__title">Wide Area Tracking Module </h3>
      <p class="project-card-new__description">Real-time stitching & object tracking using CCD/IR cameras with PTZ control.</p>
      <ul class="project-card-new__features">
        <li>Designed and implemented a module for controlling Pan and Tilt Device</li>
        <li>Real time stitching of multiple CCD/Infrared Cameras to produce a wider view</li>
        <li>Change Detection and Tracking module to detect and track objects of interest</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=cpp&theme=dark" alt="C++" title="C++">
        <img src="https://skillicons.dev/icons?i=opencv&theme=dark" alt="OpenCV" title="OpenCV">
        <img src="https://skillicons.dev/icons?i=qt&theme=dark" alt="Qt" title="Qt">
      </div>
    </div>
  </article>

  <!-- Project 2 -->
  <article class="project-card-new" data-category="computer-vision">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
        <span class="badge">Scalable</span>
      </div>
      <h3 class="project-card-new__title">Multi-Camera Multi-Person Tracking </h3>
      <p class="project-card-new__description">Real-time multi-view tracking with triangulation & Clip-ReID achieving 55% mAP improvement.</p>
      <ul class="project-card-new__features">
        <li>Developed real-time multi-camera tracking across 50+ synchronized cameras for secure site monitoring</li>
        <li>Enhanced multi-camera joins using pose triangulation (RTMPose) and appearance embeddings (Clip-ReID)</li>
        <li>Improved re-identification pipeline, achieving 55% improvement in mAP over Clip-ReID baseline (40% →62%)</li>
        <li>In-house built tools for Multi-Camera Labeling, Visualization and Analysis tools</li>
        <li>AutoLabel++: A scalable framework to train object detection models to new sites using knowledge distillation</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=terraform&theme=dark" alt="Terraform" title="Terraform">
        <img src="https://skillicons.dev/icons?i=docker&theme=dark" alt="Docker" title="Docker">
        <img src="https://skillicons.dev/icons?i=py&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=pytorch&theme=dark" alt="PyTorch" title="PyTorch">
        <img src="https://skillicons.dev/icons?i=aws&theme=dark" alt="AWS" title="AWS">
      </div>
    </div>
  </article>

  <!-- Project 3 -->
  <article class="project-card-new" data-category="computer-vision">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
        <span class="badge">Scalable</span>
      </div>
      <h3 class="project-card-new__title">Atmosphere Turbulence Removal Module </h3>
      <p class="project-card-new__description">GPU-accelerated non-rigid registration achieving massive real-time speedups.</p>
      <ul class="project-card-new__features">
        <li>Development of Atmosphere Turbulence Removal Module based on Non-Rigid Registration method</li>
        <li>Optimizations added using Pipe-And-Filter architecture and cuda implementation, achieving 240x speedup</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=cpp&theme=dark" alt="C++" title="C++">
        <img src="https://skillicons.dev/icons?i=opencv&theme=dark" alt="OpenCV" title="OpenCV">
        <img src="https://skillicons.dev/icons?i=qt&theme=dark" alt="Qt" title="Qt">
      </div>
    </div>
  </article>

  <!-- Project 4 -->
  <article class="project-card-new" data-category="computer-vision">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
        <span class="badge">Scalable</span>
      </div>
      <h3 class="project-card-new__title">Image Processing Service Development </h3>
      <p class="project-card-new__description">Cost-efficient media compression, metadata analysis & beautification using OpenCV/FFmpeg.</p>
      <ul class="project-card-new__features">
        <li>Optimizations to efficiently use servers, leading to 70% cost reduction</li>
        <li>Enable dynamic compression of media using SSIM metric</li>
        <li>Quantifying social posts ownership by measuring plagiarism using image metadata analysis</li>
        <li>Implemented Beauty filter based on variational approach by Farbman, Zeev, et al</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=java&theme=dark" alt="Java" title="Java">
        <img src="https://skillicons.dev/icons?i=aws&theme=dark" alt="AWS" title="AWS">
        <img src="https://skillicons.dev/icons?i=opencv&theme=dark" alt="OpenCV" title="OpenCV">
      </div>
    </div>
  </article>

  <!-- Project 5 -->
  <article class="project-card-new" data-category="computer-vision">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
        <span class="badge">Scalable</span>
      </div>
      <h3 class="project-card-new__title">Anonymization Software </h3>
      <p class="project-card-new__description">Low-latency face & license-plate anonymization using PyTorch + TensorRT.</p>
      <ul class="project-card-new__features">
        <li>Implement low-latency face and license plate detection software to anonymize RTSP streams</li>
        <li>Improved load balancing to ensure high GPU utilization using shared decoders and batching.</li>
      </ul>
        <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=cpp&theme=dark" alt="C++" title="C++">
        <img src="https://skillicons.dev/icons?i=fastapi&theme=dark" alt="FastAPI" title="FastAPI">
        <img src="https://skillicons.dev/icons?i=pyt&theme=dark" alt="PyTorch" title="PyTorch">
      </div>
      </div>
  </article>

  <!-- Project 6 -->
  <article class="project-card-new" data-category="computer-vision, 3d-vision">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
        <span class="badge">Scalable</span>
      </div>
      <h3 class="project-card-new__title">Cargo Volume Measurement (Airline) </h3>
      <p class="project-card-new__description">Real-time 3D reconstruction & contour fitting using depth cameras and Open3D.</p>
      <ul class="project-card-new__features">
        <li>Multi-process real-time pipe & filter architecture for 3D Reconstruction, pointcloud cleaning and contour fitting.</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=cpp&theme=dark" alt="C++" title="C++">
        <img src="https://skillicons.dev/icons?i=py&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=docker&theme=dark" alt="Docker" title="Docker">
        <img src="https://skillicons.dev/icons?i=qt&theme=dark" alt="Qt" title="Qt">
      </div>
    </div>
  </article>

  <!-- Project 7 -->
  <article class="project-card-new" data-category="deep-learning">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">Research Paper</span>
        <span class="badge">Production Ready</span>
      </div>
      <h3 class="project-card-new__title">Core Deep Learning Pipeline</h3>
      <p class="project-card-new__description">Single framework for classification, detection & segmentation with 90%+ GPU utilization.</p>
      <ul class="project-card-new__features">
        <li>Development of single pipeline supporting Image Classification, Object Detection and Semantic segmentation tasks</li>
        <li>Optimization of training and inference phase with resulting GPU utilization of over 90%</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=py&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=tensorflow&theme=dark" alt="TensorFlow" title="TensorFlow">
        <img src="https://skillicons.dev/icons?i=docker&theme=dark" alt="Docker" title="Docker">
      </div>
    </div>
</article>

  <!-- Project 8 -->
  <article class="project-card-new" data-category="deep-learning">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">Healthcare</span>
        <span class="badge">Research</span>
      </div>
      <h3 class="project-card-new__title">Improving Core ML Products & Infra</h3>
      <p class="project-card-new__description">Kubernetes based model serving, benchmarking & safety evaluation for ML products.</p>
      <ul class="project-card-new__features">
       <li>Implement serving and testing of PyTorch models over Kubernetes pods.</li>
      <li>Implement tracking metrics to benchmark multi-object tracking associators</li>
      <li>Designed benchmark to evaluate internal defect predictors on real data as well as synthetically introduced defects</li>
      <li>Designed 4 new safety performance indicators to measure safety of autonomous vehicles</li></ul>
      
  <div class="project-card-new__tech"> 
        <img src="https://skillicons.dev/icons?i=py&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=go&theme=dark" alt="Go" title="Go">
        <img src="https://skillicons.dev/icons?i=docker&theme=dark" alt="Docker" title="Docker">
        <img src="https://skillicons.dev/icons?i=kubernetes&theme=dark" alt="Kubernetes" title="Kubernetes">
      </div>
    </div>
  </article>



  <!-- Project 9 -->
  <article class="project-card-new" data-category="software-engineering">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">Open Source</span>
        <span class="badge">ROS Compatible</span>
      </div>
      <h3 class="project-card-new__title">Resell Product Form (Amazon)</h3>
      <p class="project-card-new__description">High-performance DynamoDB workflow improving completion rate 5× with 99.5% payload reduction</p>
      <ul class="project-card-new__features">
        <li>Development of data model to reduce user interaction for form completion and data payload for mobile usage</li>
        <li>Improved form completion rate by 5× with reduction of data payload by 99.5%</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=java&theme=dark" alt="Java" title="Java">
      </div>
    </div>
  </article>

  <!-- Project 10 -->
  <article class="project-card-new" data-category="data-engineering">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">Surveillance</span>
        <span class="badge">Real-time</span>
      </div>
      <h3 class="project-card-new__title">Catalog Labeling Quality Platform</h3>
      <p class="project-card-new__description">Spark based clustering system reducing labeling time from weeks to under an hour.</p>
      <ul class="project-card-new__features">
        <li>Developed a platform to cluster Amazon catalog data with Human-in-the-Loop analysis, reducing catalog quality
check time from several weeks (previously infeasible) to under an hour.</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=py&theme=dark" alt="Python" title="Python">
      </div>
    </div>
  </article>

  <!-- Project 11 -->
  <article class="project-card-new" data-category="data-engineering">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">Robotics</span>
        <span class="badge">Control Systems</span>
      </div>
      <h3 class="project-card-new__title">Training Data Management Tool</h3>
      <p class="project-card-new__description">PostgreSQL/PostGIS platform for curated dataset storage, querying & sampling.</p>
      <ul class="project-card-new__features">
        <li>Development of PostgreSQL-based inventory database with geo-coordinate support for world map datasets and a query service for sampling datasets from the database</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=py&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=django&theme=dark" alt="Django" title="Django">
        <img src="https://skillicons.dev/icons?i=postgresql&theme=dark" alt="PostgreSQL" title="PostgreSQL">
      </div>
    </div>
  </article>
</div>
</section>

<!-- Portfolio Filtering Script -->
<script>
  // Portfolio Filtering Script — supports multiple categories per card
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-new');

  // helper: normalize string to lowercase, trim
  const norm = s => (s || '').toString().trim().toLowerCase();

  // convert card data-category into an array of tokens (space or comma separated)
  function getCardCategories(card) {
    const raw = card.getAttribute('data-category') || '';
    // split on whitespace or commas, filter out empty tokens
    return raw
      .split(/[\s,]+/)
      .map(t => norm(t))
      .filter(Boolean);
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const rawFilter = button.getAttribute('data-filter');
      const filterValue = norm(rawFilter);

      // Update active button state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter project cards
      projectCards.forEach(card => {
        if (filterValue === 'all') {
          card.setAttribute('data-hidden', 'false');
          return;
        }

        const categories = getCardCategories(card);
        // show card if categories include the filter value
        const matches = categories.includes(filterValue);
        card.setAttribute('data-hidden', matches ? 'false' : 'true');
      });
    });
  });

  // Initialize: show all projects on page load
  projectCards.forEach(card => card.setAttribute('data-hidden', 'false'));
</script>
