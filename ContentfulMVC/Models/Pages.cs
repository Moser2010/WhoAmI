using Contentful.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContentfulMVC.Models
{
    public class Pages
    {
        public Asset FeaturedImage { get; set; }
        public Asset Image1 { get; set; }
        public Asset Image2 { get; set; }
        public Asset Image3 { get; set; }
    }
}
