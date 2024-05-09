# Summary
The Belly Button Biodiversity project, initiated in January 2011, offers a fascinating exploration into the microbial communities inhabiting human navels, a relatively unexplored ecosystem. The study aimed to investigate the diverse microbes residing in this moist and protected area of the body, as well as the factors influencing their presence. 

By cataloging these microbial species, known as operational taxonomic units (OTUs), the dataset highlights that a small number of these OTUs were prevalent in over 70% of individuals, while the remaining OTUs were less common. 

To read more about the study, visit https://robdunnlab.com/projects/belly-button-biodiversity/ 

The interactive dashboard allows users to explore the dataset of the study by selecting the test subject ID of interest and retrieving their demographic info, top 10 bacteria cultures found, and number of bacteria cultures found per sample.

Check out https://belindaho2828.github.io/javascript_bellybutton/ to explore the Belly Button Biodiversity dataset yourself!

# Sample Data for Test Subject ID 940:
![image-1](https://github.com/belindaho2828/javascript_bellybutton/assets/155488822/9558d04d-0198-416c-8875-9a99c6f0461a)


# Tools Used
JavaScript: used as the underlying programming language to script the app's behavior and dynamically updates the HTMl. It manipulates the dataset once extracted and creates the text seen on the dashboard such as the demographics data, options in the dropdown menu, and graph attributes. 

![image-2](https://github.com/belindaho2828/javascript_bellybutton/assets/155488822/8e9f221d-3672-4634-8089-7145428efc89)

Plotly: the data visualization library that then renders the bubble chart bar graphs.



D3: JavaScript library used to extract data from dataset URL and dynamically render it within the dashboard. It was used to create an event listener to make the dashboard dynamic by triggering udpates to the displayed data based on user's drop down selection.

![image-3](https://github.com/belindaho2828/javascript_bellybutton/assets/155488822/fd8f6cfd-dc25-4a40-aff2-7e1d5b49f627)


HTML: structures the content and layout of the webpage, which is dynamically updated by JavaSCript.

![image-4](https://github.com/belindaho2828/javascript_bellybutton/assets/155488822/86e56209-151b-44c8-8751-0dcce8f859a3)



# Acknowledgements
Use of stackoverflow, D3 documentation, and conversations with colleagues when troubleshooting
