class Config:
    DEBUG = False
    TESTING = False
    TREE_VALUES = []
    ARRAY_VALUES = []
    DIAGRAM_VALUES = []
    PAGE_URLS = []

class ProductionConfig(Config):
    TREE_VALUES = [100, 50, 120, 45, 63, 110, 135, 35, 47, 60, 77, 102, 117, 125, 150]
    ARRAY_VALUES = [12, 15, 17, 20, 32, 37, 43, 65, 98]
    DIAGRAM_VALUES = [115, 42, 15, 88, 75, 23, 93, 30, 10, 55, 100, 70, 48, 63, 37, 82]
    PAGE_URLS = ['/sorting', '/searching', '/bintree']


class DevelopmentConfig(Config):
    DEBUG = True
    TREE_VALUES = [100, 50, 120, 45, 63, 110, 135, 35, 47, 60, 77, 102, 117, 125, 150]
    ARRAY_VALUES = [12, 15, 17, 20, 32, 37, 43, 65, 98]
    DIAGRAM_VALUES = [115, 42, 15, 88, 75, 23, 93, 30, 10, 55, 100, 70, 48, 63, 37, 82]
    PAGE_URLS = ['/sorting', '/searching', '/bintree']


class TestingConfig(Config):
    TESTING = True
    TREE_VALUES = [100, 50, 120, 45, 63, 110, 135, 35, 47, 60, 77, 102, 117, 125, 150]
    ARRAY_VALUES = [12, 15, 17, 20, 32, 37, 43, 65, 98]
    DIAGRAM_VALUES = [115, 42, 15, 88, 75, 23, 93, 30, 10, 55, 100, 70, 48, 63, 37, 82]
    PAGE_URLS = ['/sorting', '/searching', '/bintree']
    
