let
    Source = Csv.Document(Web.Contents("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"),[Delimiter=",", Columns=41, Encoding=65001, QuoteStyle=QuoteStyle.None]),
    #"Changed Type" = Table.TransformColumnTypes(Source,{{"Column1", type text}, {"Column2", type text}, {"Column3", type text}, {"Column4", type text}, {"Column5", type text}, {"Column6", type text}, {"Column7", type text}, {"Column8", type text}, {"Column9", type text}, {"Column10", type text}, {"Column11", type text}, {"Column12", type text}, {"Column13", type text}, {"Column14", type text}, {"Column15", type text}, {"Column16", type text}, {"Column17", type text}, {"Column18", type text}, {"Column19", type text}, {"Column20", type text}, {"Column21", type text}, {"Column22", type text}, {"Column23", type text}, {"Column24", type text}, {"Column25", type text}, {"Column26", type text}, {"Column27", type text}, {"Column28", type text}, {"Column29", type text}, {"Column30", type text}, {"Column31", type text}, {"Column32", type text}, {"Column33", type text}, {"Column34", type text}, {"Column35", type text}, {"Column36", type text}, {"Column37", type text}, {"Column38", type text}, {"Column39", type text}, {"Column40", type text}, {"Column41", type text}}),
    #"Promoted Headers" = Table.PromoteHeaders(#"Changed Type", [PromoteAllScalars=true]),
    #"Changed Type1" = Table.TransformColumnTypes(#"Promoted Headers",{{"Province/State", type text}, {"Country/Region", type text}, {"Lat", type number}, {"Long", type number}, {"1/22/20", Int64.Type}, {"1/23/20", Int64.Type}, {"1/24/20", Int64.Type}, {"1/25/20", Int64.Type}, {"1/26/20", Int64.Type}, {"1/27/20", Int64.Type}, {"1/28/20", Int64.Type}, {"1/29/20", Int64.Type}, {"1/30/20", Int64.Type}, {"1/31/20", Int64.Type}, {"2/1/20", Int64.Type}, {"2/2/20", Int64.Type}, {"2/3/20", Int64.Type}, {"2/4/20", Int64.Type}, {"2/5/20", Int64.Type}, {"2/6/20", Int64.Type}, {"2/7/20", Int64.Type}, {"2/8/20", Int64.Type}, {"2/9/20", Int64.Type}, {"2/10/20", Int64.Type}, {"2/11/20", Int64.Type}, {"2/12/20", Int64.Type}, {"2/13/20", Int64.Type}, {"2/14/20", Int64.Type}, {"2/15/20", Int64.Type}, {"2/16/20", Int64.Type}, {"2/17/20", Int64.Type}, {"2/18/20", Int64.Type}, {"2/19/20", Int64.Type}, {"2/20/20", Int64.Type}, {"2/21/20", Int64.Type}, {"2/22/20", Int64.Type}, {"2/23/20", Int64.Type}, {"2/24/20", Int64.Type}, {"2/25/20", Int64.Type}, {"2/26/20", Int64.Type}, {"2/27/20", Int64.Type}})
in
    #"Changed Type1"
