The **Coincident Site Lattice (CSL)** occurs at the interface of grain boundaries in polycrystalline materials, where, at specific orientations, the atomic lattices of adjacent grains partially coincide. This alignment of atoms at certain angles forms a CSL, which significantly influences the mechanical, electrical, and other properties of the material.

In this project, I have visualized (using p5.js library) how the number of coincident sites changes with varying angles of rotation between the grains. By examining these relationships, we can better understand how the degree of misorientation affects the structural and energetic properties of grain boundaries. This understanding can be useful for optimizing material properties through **grain boundary engineering**, with potential applications in improving **material strength**, **electrical conductivity**, and **resistance to corrosion**.


https://github.com/user-attachments/assets/b10e3b5e-8b23-4e72-ab6a-f207051f926d

Below is the pictorial representation of how we calculate $\Sigma$ for a particular rotation angle:


$$\Sigma = \frac{\text{Volume of elementary cell of CSL}}{\text{Volume of elementary cell of crystal lattice}}$$

<p float="left">
  <img src="https://github.com/user-attachments/assets/c06188e5-a8f4-4dac-a2d9-b2956322b91f" width="45%" />
  <img src="https://github.com/user-attachments/assets/e8de641c-df1d-484c-ace0-0cdfe2962ee4" width="45%" />
</p>

In this case the value of $\Sigma$ can be calculated as: 

$$\Sigma = \frac{\sqrt{5}a \times \sqrt{5}a}{a\times a} = 5 $$






