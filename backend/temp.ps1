$a = "cap-shape
cap-surface
cap-color
bruises
odor
gill-attachment
gill-spacing
gill-size
gill-color
stalk-shape
stalk-root
stalk-surface-above-ring
stalk-surface-below-ring
stalk-color-above-ring
stalk-color-below-ring
veil-type
veil-color
ring-number
ring-type
spore-print-color
population
habitat"


    #   $a =  $a | % { ($_ -replace "- ").Trim()}
       $props = $a -split "`n" #| % { $_ -replace "^\W+" }
       $data = "x,y,g,f,f,f,c,b,p,e,b,k,k,n,p,p,w,o,l,h,v,d" -split ","
       $mushroom = New-Object PSObject
       0..($props.Length -1) | % { Add-Member -InputObject $mushroom -Name $props[$_] -Value $data[$_] -Type NoteProperty }

       Invoke-RestMethod -Method Post -Body ($mushroom | ConvertTo-Json) -ContentType "application/json" -Uri http://localhost:8080/v1/mushrooms