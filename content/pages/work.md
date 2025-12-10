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
    <button class="filter-btn" data-filter="software-engineering">Software Engineering</button>
    <button class="filter-btn" data-filter="robotics">Robotics</button>
  </div>

  <!-- Projects Grid -->
  <div class="projects-grid">
    <!-- Project 1 -->
    <article class="project-card-new" data-category="deep-learning">
      <div class="project-card-new__body">
        <div class="project-card-new__badges">
          <span class="badge">Research Paper</span>
          <span class="badge">Production Ready</span>
        </div>
        <h3 class="project-card-new__title">Person Re-Identification System</h3>
        <p class="project-card-new__description">Deep learning pipeline for tracking individuals across multiple camera feeds using attention-based feature extraction and metric learning.</p>
        <ul class="project-card-new__features">
          <li>Achieves 94.2% rank-1 accuracy on Market-1501 benchmark</li>
          <li>Real-time processing at 30+ FPS on RTX 3080</li>
          <li>Supports multi-camera tracking with ID consistency</li>
        </ul>
        <div class="project-card-new__tech">
          <img src="https://skillicons.dev/icons?i=python&theme=dark" alt="Python" title="Python">
          <img src="https://skillicons.dev/icons?i=pytorch&theme=dark" alt="PyTorch" title="PyTorch">
          <img src="https://skillicons.dev/icons?i=docker&theme=dark" alt="Docker" title="Docker">
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
      <h3 class="project-card-new__title">Real-time Object Detection API</h3>
      <p class="project-card-new__description">Production-ready REST API for object detection using YOLOv8 with custom-trained models for industrial applications.</p>
      <ul class="project-card-new__features">
        <li>Handles 100+ concurrent requests with &lt;50ms latency</li>
        <li>Custom trained on 50K+ industrial images</li>
        <li>Docker containerized with auto-scaling support</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=python&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=fastapi&theme=dark" alt="FastAPI" title="FastAPI">
        <img src="https://skillicons.dev/icons?i=docker&theme=dark" alt="Docker" title="Docker">
      </div>
    </div>
  </article>

  <!-- Project 3 -->
  <article class="project-card-new" data-category="deep-learning">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">Healthcare</span>
        <span class="badge">Research</span>
      </div>
      <h3 class="project-card-new__title">Visual Transformer for Medical Imaging</h3>
      <p class="project-card-new__description">Vision Transformer implementation optimized for medical image classification with interpretability features for clinical use.</p>
      <ul class="project-card-new__features">
        <li>Achieves 98.5% accuracy on chest X-ray classification</li>
        <li>Attention visualization for explainability</li>
        <li>Trained on 100K+ medical images with privacy-preserving techniques</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=python&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=tensorflow&theme=dark" alt="TensorFlow" title="TensorFlow">
        <img src="https://skillicons.dev/icons?i=pytorch&theme=dark" alt="PyTorch" title="PyTorch">
      </div>
    </div>
  </article>

  <!-- Project 4 -->
  <article class="project-card-new" data-category="software-engineering">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">Open Source</span>
        <span class="badge">ROS Compatible</span>
      </div>
      <h3 class="project-card-new__title">3D Point Cloud Processing Library</h3>
      <p class="project-card-new__description">High-performance Python library for point cloud processing with GPU acceleration and ROS integration for robotics applications.</p>
      <ul class="project-card-new__features">
        <li>Processing rates of 100K points/sec on CPU, 10M points/sec on GPU</li>
        <li>ROS1/ROS2 compatible with publish-subscribe pattern</li>
        <li>Support for multiple point cloud formats (PCD, PLY, LAS)</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=python&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=cpp&theme=dark" alt="C++" title="C++">
        <img src="https://skillicons.dev/icons?i=cuda&theme=dark" alt="CUDA" title="CUDA">
      </div>
    </div>
  </article>

  <!-- Project 5 -->
  <article class="project-card-new" data-category="computer-vision">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">Surveillance</span>
        <span class="badge">Real-time</span>
      </div>
      <h3 class="project-card-new__title">Wide Area Tracking Module</h3>
      <p class="project-card-new__description">Designed and implemented a module for controlling Pan and Tilt Device with real-time stitching of multiple camera feeds.</p>
      <ul class="project-card-new__features">
        <li>Real time stitching of multiple CCD/Infrared Cameras to produce wider view</li>
        <li>Change Detection and Tracking module to detect and track objects of interest</li>
        <li>Pan-Tilt device control with automated object following</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=python&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=opencv&theme=dark" alt="OpenCV" title="OpenCV">
        <img src="https://skillicons.dev/icons?i=docker&theme=dark" alt="Docker" title="Docker">
      </div>
    </div>
  </article>

  <!-- Project 6 -->
  <article class="project-card-new" data-category="robotics">
    <div class="project-card-new__body">
      <div class="project-card-new__badges">
        <span class="badge">Robotics</span>
        <span class="badge">Control Systems</span>
      </div>
      <h3 class="project-card-new__title">Robotic Arm Motion Planning</h3>
      <p class="project-card-new__description">Inverse kinematics and motion planning algorithms for industrial robotic arms with collision avoidance.</p>
      <ul class="project-card-new__features">
        <li>Implements RRT* path planning with collision avoidance</li>
        <li>Inverse kinematics solver for 6-DOF manipulators</li>
        <li>Real-time trajectory execution with safety constraints</li>
      </ul>
      <div class="project-card-new__tech">
        <img src="https://skillicons.dev/icons?i=python&theme=dark" alt="Python" title="Python">
        <img src="https://skillicons.dev/icons?i=cpp&theme=dark" alt="C++" title="C++">
        <img src="https://skillicons.dev/icons?i=ros&theme=dark" alt="ROS" title="ROS">
      </div>
    </div>
  </article>
</div>
</section>

<!-- Portfolio Filtering Script -->
<script>
  // Get all filter buttons and project cards
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-new');

  // Add click event listener to each filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      // Update active button state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter project cards
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.setAttribute('data-hidden', 'false');
        } else {
          card.setAttribute('data-hidden', 'true');
        }
      });
    });
  });

  // Initialize: show all projects on page load
  projectCards.forEach(card => {
    card.setAttribute('data-hidden', 'false');
  });
</script>
