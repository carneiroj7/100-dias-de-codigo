import pandas as pd
import numpy as np

data = {'vendas': [100, 200, 300, 400, 500, 600, 400, 800, 900, 1000]}
df = pd.DataFrame(data)

media = df['vendas'].mean()
mediana = df['vendas'].median()
desvio_padrao = df['vendas'].std()
maximo = df['vendas'].max()
mínimo = df['vendas'].min()

print("Média:", media)
print("Mediana:", mediana)
print("Desvio padrão:", desvio_padrao)
print("Máximo", maximo)
print("Mínimo", mínimo)

