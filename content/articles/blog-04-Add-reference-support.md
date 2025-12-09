Title: Integrating Reference support to my Blog
Date: 2025-11-13
Tags: pelican, plugin, citation, references, blogging, markdown
Author: Saurabh Khanduja
Slug: add-pelican-cite-plugin

If we want to manage references or citations in our blog, the [Pelican-cite](https://github.com/VorpalBlade/pelican-cite) plugin makes it simple. Here’s how to set it up.

## Installation

Begin by installing the pelican-cite dependency **pybtex** with pip, followed by cloning the plugin into our project directory.

``` bash
pip install pybtex
git clone https://github.com/VorpalBlade/pelican-cite plugins/pelican-cite
```

## Configuration

Next, configure the pelican settings file `pelicanconf.py` to activate the plugin and specify our bibliography source file.
```python
PLUGIN_PATHS = ["plugins"]  # Directory where Pelican looks for plugins
PLUGINS = ["pelican-cite", "render_math", "pelican-toc"]  # List of active plugins
PUBLICATIONS_SRC = "content/reference.bib"  # Path to the bibliography file
BIBLIOGRAPHY_START = '<section id="references"><h2>References</h2>'  # To change the default name Biblography to References
BIBLIOGRAPHY_END = '</section>'  # HTML end tag for references section
```

## Create a Bibliography File

Create a BibTeX file (e.g., `content/reference.bib`) with our references. The path should match the `PUBLICATIONS_SRC` setting. 

To given an example, I will show the references used in the [ROAR (Remove and Retrain) repository](https://github.com/saurabheights/roar) built for ranking different interpretability methods:

```bibtex
@inproceedings{khakzar2021criticalpathways,
  title={Neural Response Interpretation through the Lens of Critical Pathways},
  author={Khakzar, Ashkan and others},
  booktitle={CVPR},
  year={2021}
}

@inproceedings{hooker2019benchmark,
  title={A Benchmark for Interpretability Methods in Deep Neural Networks},
  author={Hooker, Sara and others},
  booktitle={NeurIPS},
  year={2019}
}

@article{samek2017evaluating,
  title={Evaluating the Visualization of What a Deep Neural Network Has Learned},
  author={Samek, Wojciech and others},
  journal={IEEE Transactions on Neural Networks and Learning Systems},
  year={2017}
}
```

## Use Citations in Posts

Then, inside our markdown post, you can cite them like this:
```
Deep learning interpretation methods are an active research area 
[@khakzar2021criticalpathways], [@hooker2019benchmark], [@samek2017evaluating].
```

And this is how it will appear in blog:

 Deep learning interpretation methods are an active research area 
[@khakzar2021criticalpathways], [@hooker2019benchmark], [@samek2017evaluating].

Pelican will automatically generate a **References** section at the end of the article using the pelican-cite plugin.