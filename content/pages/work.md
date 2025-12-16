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

  <!-- Project -->
  <article class="project-card-new" data-category="computer-vision 3d-vision software-engineering deep-learning" data-priority="5" data-date="2025-12-16">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
        <span class="badge">Computer Vision</span>
      </div>
      <h3 class="project-card-new__title">Multi-Camera Multi-Person Tracking </h3>
      <p class="project-card-new__description">Real-time tracking solution for customer behavioral and site security analysis with high focus on reidentification.</p>
      <ul class="project-card-new__features">
        <li>Developed real-time multi-camera tracking solution across synchronized cameras for secure site monitoring</li>
        <li>Enhanced inter-camera joins using pose triangulation and appearance embeddings</li>
        <li>Domain Generalizable object re-identification pipeline on challenging open-set benchmark (40% → 74% mAP)</li>
        <li>In-house built tools for Multi-Camera Labeling, Visualization and Analysis</li>
        <!-- <li>AutoLabel++: A scalable framework to faster labelling with in-built train object detection models to new sites using knowledge distillation</li> Move this to data-engineering card -->
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=py&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=pytorch&theme=dark" alt="PyTorch" title="PyTorch">
        <img src="https://skillicons.dev/icons?i=docker&theme=dark" alt="Docker" title="Docker">
      </div>
    </div>
  </article>

  <!-- Project -->
  <article class="project-card-new" data-category="computer-vision software-engineering" data-priority="0" data-date="">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
        <span class="badge">Scalable</span>
      </div>
      <h3 class="project-card-new__title">Live-Camera Anonymization Software for VMS</h3>
      <p class="project-card-new__description">A very low-latency face & license-plate anonymization with direct integration to Milestone VMS.</p>
      <ul class="project-card-new__features">
        <li>Implement low-latency face and license plate detection software to anonymize RTSP streams</li>
        <li>Integrated into Milestone VMS via Milestone AI Bridge</li>
        <li>Improved load balancing to ensure high GPU utilization using shared decoders and batching.</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=cpp&theme=dark" alt="C++" title="C++">
        <img src="https://skillicons.dev/icons?i=fastapi&theme=dark" alt="FastAPI" title="FastAPI">
        <img src="https://skillicons.dev/icons?i=pyt&theme=dark" alt="PyTorch" title="PyTorch">
      </div>
    </div>
  </article>

  <!-- Project -->
  <article class="project-card-new" data-category="computer-vision, 3d-vision" data-priority="0" data-date="">
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


  <!-- Project -->
  <article class="project-card-new" data-category="deep-learning software-engineering" data-priority="0" data-date="">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
        <span class="badge">Scalable</span>
      </div>
      <h3 class="project-card-new__title">Model Robustness Tests for Autonomous Vehicles</h3>
      <p class="project-card-new__description">Kubernetes based model serving, benchmarking & safety evaluation for ML products.</p>
      <ul class="project-card-new__features">
      <li>Implement serving and testing of PyTorch models over Kubernetes pods.</li>
      <!-- <li>Implement tracking metrics to benchmark multi-object tracking associators</li> -->
      <li>Designed benchmark to evaluate internal defect predictors on real data as well as synthetically introduced defects</li>
      <li>Designed 4 new safety performance indicators to measure safety of autonomous vehicles</li></ul>
      
      <div class="project-card-new__tech"> 
        <img src="https://skillicons.dev/icons?i=py&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=go&theme=dark" alt="Go" title="Go">
        <img src="https://skillicons.dev/icons?i=pyt&theme=dark" alt="PyTorch" title="PyTorch">
        <img src="https://skillicons.dev/icons?i=docker&theme=dark" alt="Docker" title="Docker">
        <img src="https://skillicons.dev/icons?i=kubernetes&theme=dark" alt="Kubernetes" title="Kubernetes">
      </div>
    </div>
  </article>


  <!-- Project -->
  <article class="project-card-new" data-category="data-engineering" data-priority="0" data-date="">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">Scalable</span>
      </div>
      <h3 class="project-card-new__title">Geo-Data Management Tool</h3>
      <p class="project-card-new__description">PostgreSQL/PostGIS platform for curated dataset storage, querying & sampling.</p>
      <ul class="project-card-new__features">
        <li>Development of PostgreSQL-based inventory database with geo-coordinate support for world map datasets</li>
        <li>Django based backend to manage user requests with celery based workers for high compute tasks</li>
        <li>Client library for sampling datasets from the database</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=py&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=django&theme=dark" alt="Django" title="Django">
        <img src="https://skillicons.dev/icons?i=postgresql&theme=dark" alt="PostgreSQL" title="PostgreSQL">
      </div>
    </div>
  </article>

  <!-- Project -->
  <article class="project-card-new" data-category="deep-learning computer-vision software-engineering" data-priority="0" data-date="">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
      </div>
      <h3 class="project-card-new__title">Multi-Task Deep Learning Pipeline</h3>
      <p class="project-card-new__description">Single framework for classification, detection & segmentation with 90%+ GPU utilization.</p>
      <ul class="project-card-new__features">
        <li>Development of single pipeline supporting Image Classification, Object Detection and Semantic segmentation tasks</li>
        <li>Re-implementation of CPU intensive metrics using multi-processing and cython to remove any wait for GPU</li>
        <li>Optimization of training and inference phase with resulting GPU utilization of over 90%</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=py&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=tensorflow&theme=dark" alt="TensorFlow" title="TensorFlow">
        <img src="https://skillicons.dev/icons?i=docker&theme=dark" alt="Docker" title="Docker">
      </div>
    </div>
</article>

  <!-- Project -->
  <article class="project-card-new" data-category="computer-vision software-development" data-priority="0" data-date="">
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
        <img src="https://skillicons.dev/icons?i=opencv&theme=dark" alt="OpenCV" title="OpenCV">
        <img src="https://skillicons.dev/icons?i=aws&theme=dark" alt="AWS" title="AWS">
      </div>
    </div>
  </article>


  <!-- Project -->
  <article class="project-card-new" data-category="software-engineering" data-priority="0" data-date="">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
        <span class="badge">Full-Stack Dev</span>
      </div>
      <h3 class="project-card-new__title">Resell Product Form (Amazon)</h3>
      <p class="project-card-new__description">High-performance DynamoDB workflow improving completion rate 5× with 99.5% payload reduction</p>
      <ul class="project-card-new__features">
        <li>Development of data model to reduce user interaction for form completion and data payload for mobile usage</li>
        <li>Improvement in form completion rate by 5x.</li>
        <li>Reduction of data payload by 99.5%.</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=java&theme=dark" alt="Java" title="Java">
      </div>
    </div>
  </article>

  <!-- Project -->
  <article class="project-card-new" data-category="data-engineering" data-priority="0" data-date="">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">Scalable</span>
        <span class="badge">Machine Learning</span>
      </div>
      <h3 class="project-card-new__title">Catalog Labeling Quality Platform</h3>
      <p class="project-card-new__description">Spark based clustering system reducing labeling time from weeks to under an hour.</p>
      <ul class="project-card-new__features">
        <li>Built a platform for QA team to analyze and correct incorrectly labelled products</li>
        <li>Utilized unsupervised learning to cluster Amazon catalog data with Human-in-the-Loop analysis</li>
        <li>Reduced catalog quality check time from several weeks (previously infeasible) to under an hour</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=py&theme=dark" alt="Python" title="Python">
      </div>
    </div>
  </article>

  <!-- Project -->
  <article class="project-card-new" data-category="computer-vision" data-priority="4", data-date="2025-12-15">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
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
  
  <!-- Project -->
  <article class="project-card-new" data-category="computer-vision software-engineering" data-priority="0" data-date="">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">High Performance</span>
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
</div>
</section>

<!-- Portfolio Filtering Script -->
<script>
  // Extract and normalize categories from a project card
  function getCardCategories(card) {
    const raw = card.dataset.category || '';
    return raw.split(/[\s,]+/).map(c => c.trim().toLowerCase());
  }

  // Read priority from the card and convert it to a number
  // If no priority is defined, default to 0 & max is 5
  function getCardPriority(card) {
    return parseInt(card.dataset.priority || '0', 10);
  }

  // Read date from the card and convert it to a Date object
  function getCardDate(card) {
    const rawDate = card.dataset.date;
    return rawDate ? new Date(rawDate) : new Date(0);
  }

  // Select all filter buttons (e.g., All, AI, CV, etc.)
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Select all project cards and convert NodeList to Array
  const projectCards = Array.from(document.querySelectorAll('.project-card-new'));

  // Select the container that holds all project cards
  const projectsGrid = document.querySelector('.projects-grid');

  // Attach click handler to each filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the selected filter value from the button
      const filterValue = button.dataset.filter.toLowerCase();

      // Update active button
      // Remove active state from all buttons first
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add active state to the clicked button
      button.classList.add('active');

      // Filter cards by category
      const visibleCards = projectCards.filter(card => {
        const categories = getCardCategories(card);
        return filterValue === 'all' || categories.includes(filterValue);
      });

      // Sort by priority (HIGH -> LOW)
      // Priority is the primary sorting rule
      visibleCards.sort((a, b) => {
        const priorityDiff = getCardPriority(b) - getCardPriority(a);

        if (priorityDiff !== 0) {
          return priorityDiff; // higher priority first
        }

        // Date acts as a secondary sorting rule
        return getCardDate(b) - getCardDate(a);
      });

      // Update DOM
      // Hide all cards first
      projectCards.forEach(card => card.setAttribute('data-hidden', 'true'));

      // Show only filtered + sorted cards
      visibleCards.forEach(card => {
        card.setAttribute('data-hidden', 'false');
        projectsGrid.appendChild(card); // reorder
      });
    });
  });

  // Ensure all cards are visible before initial filtering
  projectCards.forEach(card => card.setAttribute('data-hidden', 'false'));

  // Trigger initial filter click on page load so cards are sorted
  // by priority/date without requiring user interaction
  document.querySelector('.filter-btn[data-filter="all"]')?.click();
</script>
